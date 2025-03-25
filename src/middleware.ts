import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from './services/Auth';

const roleBasedPrivateRoutes = {
  tenant: [/^\/tenant/, /^\/profile/], // tenant can access /tenant and /profile
  landlord: [/^\/landlord/, /^\/profile/, /^\/add-rental/], // landlord can access /landlord, /profile and /add-rental
  admin: [/^\/admin/, /^\/profile/], // admin can access /admin and /profile
};

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ['/login', '/register'];

export const middleware = async (request: NextRequest) => {
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
