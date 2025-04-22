import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser, getNewToken, logOut } from './services/Auth';
import { isTokenExpired } from './lib/verifyToken';

const roleBasedPrivateRoutes = {
  tenant: [/^\/tenant/, /^\/profile/], // tenant can access /tenant and /profile
  landlord: [/^\/landlord/, /^\/profile/, /^\/add-rental/], // landlord can access /landlord, /profile and /add-rental
  admin: [/^\/admin/, /^\/profile/], // admin can access /admin and /profile
};

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ['/login', '/register', '/reset-password'];

export const middleware = async (request: NextRequest) => {
  const { origin, pathname } = request.nextUrl;
  // const baseURL = process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin;

  const userInfo = await getCurrentUser(); // getting user-information
  const nextResponse = NextResponse.next(); // making default response

  // if no user-information
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return nextResponse; // forwarding to the login/register/reset-password page
    } else {
      return NextResponse.redirect(`${origin}/login?redirectPath=${pathname}`);
    }
  }

  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  // if no accessToken or it's expired
  if (!accessToken || (await isTokenExpired(accessToken))) {
    // if no refreshToken or it's expired, then logOut
    if (!refreshToken || (await isTokenExpired(refreshToken))) {
      try {
        await logOut();
        return NextResponse.redirect(new URL('/login', request.url));
      } catch (error) {
        console.error('Logout failed:', error);
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }

    // if refreshToken is valid, get a new accessToken
    try {
      const { data } = await getNewToken(); // Fetch a new token
      const newToken = data?.accessToken;
      if (newToken) {
        // setting newToken as accessToken
        nextResponse.cookies.set('accessToken', newToken, {
          httpOnly: true, // can't be accessed by document.cookie
          path: '/', // Cookie will be available everywhere
          secure: process.env.NODE_ENV === 'production', // will work on HTTPS, not HTTP
        });
        nextResponse.headers.set('X-Access-Token', newToken); // to give other functions immediate access to the new token
      } else {
        await logOut();
        return NextResponse.redirect(new URL('/login', request.url));
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      await logOut();
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // role-based path checking
  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some(route => pathname.match(route))) {
      return nextResponse; // forwarding to the permitted path
    }
  }

  return NextResponse.redirect(new URL('/', request.url));
};

export const config = {
  matcher: [
    '/login',
    '/register',
    '/reset-password',
    '/profile',
    '/profile/:page*',
    '/add-rental',
    '/tenant',
    '/tenant/:page*',
    '/landlord',
    '/landlord/:page*',
    '/admin',
    '/admin/:page*',
  ],
};
