import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser, getNewToken } from './services/Auth';
import { isTokenExpired } from './lib/verifyToken';

const roleBasedPrivateRoutes = {
  tenant: [/^\/tenant/, /^\/profile/], // tenant can access /tenant and /profile
  landlord: [/^\/landlord/, /^\/profile/, /^\/add-rental/], // landlord can access /landlord, /profile and /add-rental
  admin: [/^\/admin/, /^\/profile/], // admin can access /admin and /profile
};

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ['/login', '/register'];

export const middleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get('accessToken')?.value;

  if (!accessToken || (await isTokenExpired(accessToken))) {
    try {
      const { data } = await getNewToken(); // Fetch a new token
      const newToken = data?.accessToken;
      if (newToken) {
        const response = NextResponse.next();
        response.cookies.set('accessToken', newToken, {
          httpOnly: true, // can't be accessed by document.cookie
          path: '/', // Cookie will be available everywhere
          secure: process.env.NODE_ENV === 'production', // work on HTTPS, not HTTP
        });
        response.headers.set('X-Access-Token', newToken); // to give other functions immediate access to the valid token
        return response;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      // Optionally redirect to login or handle the error
      return NextResponse.next(); // Proceed without updating token
    }
  }

  const { pathname } = request.nextUrl;
  // const baseURL = process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin;

  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        `${request.nextUrl.origin}/login?redirectPath=${pathname}`
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some(route => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL('/', request.url));
};

export const config = {
  matcher: [
    '/login',
    '/register',
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
