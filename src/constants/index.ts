// protectedRoutes
export const protectedRoutes = [
  '/profile',
  '/profile/:page',
  '/add-rental',
  '/tenant',
  '/tenant/:page',
  '/landlord',
  '/landlord/:page',
  '/admin',
  '/admin/:page',
];

export const websiteHomePageURL: string = process.env.NEXT_PUBLIC_CLIENT_URL as string;

export const websiteFacebookPageURL: string = process.env.NEXT_PUBLIC_FACEBOOK_URL as string;

export const websiteXPageURL: string = process.env.NEXT_PUBLIC_X_URL as string;

export const websiteLinkedinPageURL: string = process.env.NEXT_PUBLIC_LINKEDIN_URL as string;
