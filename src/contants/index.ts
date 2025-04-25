import { Metadata } from 'next';

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

// BasaFinderKeywords
const BasaFinderKeywords: string[] = [
  // General Rental Platform Keywords
  'best rental housing platform for landlords and tenants',
  'transparent rental process web app',
  'rental property management software for small landlords',
  'easy tenant-landlord connection platform',

  // Tenant-Focused Keywords
  'how to find verified rental homes online',
  'best app for hassle-free house renting',
  'rental platform with no hidden fees',
  'tenant-friendly rental housing website',

  // Landlord-Focused Keywords
  'best platform to list rental property for free',
  'how to manage tenants online easily',
  'landlord software to screen tenants fast',
  'automated rental collection for property owners',

  // Admin & Business Side Keywords
  'rental management system for admins',
  'how to streamline rental property approvals',
  'best dashboard for rental housing admin',

  // Local SEO & Long-Tail Variations
  'rental housing app in [City/Country]',
  'affordable rental platform for students in [Location]',
  'quick rental approval housing website',

  // KGR-Friendly Keywords
  'Basafinder alternative for rental housing',
  'how Basafinder simplifies renting',
  'rental platform with admin dashboard features',
];

// mainLayoutMetadata
export const mainLayoutMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // must use here
  title: {
    default: 'BasaFinder',
    template: '%s | BasaFinder',
  },
  description:
    'Discover your next rental home effortlessly with BasaFinder. Browse verified rental listings, connect with landlords, and find the perfect place to live—whether you’re a student, family, or professional.',

  keywords:
    BasaFinderKeywords ||
    'BasaFinder, rental, rentals, tenant, tenants, landlord, landlords', // must use separate Array field on DB for keywords
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'BasaFinder',
    description:
      'Looking for your next rental home? 🎯 BasaFinder makes it easy to discover verified listings, contact landlords, and move in stress-free. Start your rental journey with us today!',
    url: 'https://basafinder-clientside.vercel.app',
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder App Preview Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BasaFinder',
    description:
      '🏠 Rent smart with BasaFinder! Find verified homes, talk to landlords directly, and move in faster. Your next home is just a few clicks away.',
    images: ['/og-image.png'],
  },
};

// loginPageMetadata
export const loginPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Login',
  description:
    'Login to your BasaFinder account and manage your rental properties or find your ideal rental home. Secure access for landlords and tenants.',
  keywords: [
    'BasaFinder login',
    'rental platform login',
    'tenant login',
    'landlord login',
    'rental housing login',
    ...BasaFinderKeywords, // Including the main keywords from original list
  ],
};

// registerPageMetadata
export const registerPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Register',
  description:
    'Register to your BasaFinder account and manage your rental properties or find your ideal rental home. Secure access for landlords and tenants.',
  keywords: [
    'BasaFinder register',
    'rental platform register',
    'tenant register',
    'landlord register',
    'rental housing register',
    ...BasaFinderKeywords, // Including the main keywords from original list
  ],
};

// rentalsPageMetadata
export const rentalsPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Rentals',
  description:
    'Explore verified rental listings on BasaFinder. Find affordable and trusted houses for rent from verified landlords. Hassle-free browsing for students, families, and professionals.',
  keywords: [
    'BasaFinder rentals',
    'browse rental homes',
    'houses for rent',
    'verified rental listings',
    'rental homes for students',
    'affordable rental housing',
    'best platform to find rental houses',
    'rental properties near me',
    ...BasaFinderKeywords,
  ],
};

// addRentalPageMetadata
export const addRentalPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Add Rental',
  description:
    'Post a new rental listing on BasaFinder. Share detailed property information, set your rent, and attract potential tenants easily.',
  keywords: [
    'post rental',
    'add rental',
    'landlord property listing',
    'new rental listing',
    'rent out property',
    'add house for rent',
    'BasaFinder landlord',
    ...BasaFinderKeywords,
  ],
};

// aboutUsPageMetadata
export const aboutUsPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'About Us',
  description:
    '🏡 Discover the story behind BasaFinder — how we’re making rental experiences seamless for both tenants and landlords. Explore our mission, values, and why thousands trust us to find their next home!',
  keywords: [
    'about BasaFinder',
    'BasaFinder mission',
    'rental platform Bangladesh',
    'trusted rental service',
    'find rental home',
    'landlord tenant connection',
    ...BasaFinderKeywords,
  ],
};

// faqPageMetadata
export const faqPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'FAQs',
  description:
    'Have questions about BasaFinder? 🤔 Our FAQ page covers everything from how to use the platform to property verification, security, and more. Get quick answers and start renting smart!',
  keywords: [
    'BasaFinder FAQ',
    'rental help',
    'find house questions',
    'how BasaFinder works',
    'list property in Bangladesh',
    'rent apartment online',
    'property listing guide',
    'safe online rental platform',
  ],
};

// termsAndConditionsPageMetadata
export const termsAndConditionsPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Terms & Conditions',
  description:
    'By using BasaFinder, you agree to our Terms and Conditions. Learn about user responsibilities, rental agreements, data security, prohibited activities, and more.',
  keywords: [
    'Terms and conditions',
    'user responsibilities',
    'rental listings',
    'privacy policy',
    'data security',
    'prohibited activities',
  ],
};

// privacyPolicyPageMetadata
export const privacyPolicyPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Privacy Policy',
  description:
    'BasaFinder values your privacy and is committed to safeguarding your personal information. Learn about the data we collect, how we use it, and your rights regarding your personal information.',
  keywords: [
    'Privacy policy',
    'BasaFinder privacy',
    'data protection',
    'personal data',
    'user rights',
    'data collection',
  ],
};

// newsPageMetadata
export const newsPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'News & Updates',
  description:
    'Stay informed with the latest news, market trends, updates on BasaFinder, new features, and tips for tenants and landlords.',
  keywords: [
    'BasaFinder news',
    'rental market updates',
    'property rental news',
    'BasaFinder new features',
    'rental tips',
    'rental guides',
    'property updates',
  ],
};

// Below are all disallowed to index to all crawllers
// validationPageMetadata
export const validationPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Validation',
};
// successPageMetadata
export const successPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Success',
};

// cancelPageMetadata
export const cancelPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Cancel',
};

// failedPageMetadata
export const failedPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Failed',
};

// offlinePageMetadata
export const offlinePageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Offline',
};

// resetPasswordPageMetadata
export const resetPasswordPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Reset Password',
};

// dashboardLayoutAllPageMetadata
export const dashboardLayoutAllPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Dashboard',
};

// profilePageMetadata
export const profilePageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Profile',
};

// changePasswordPageMetadata
export const changePasswordPageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Change Password',
};

// updateProfilePageMetadata
export const updateProfilePageMetadata: Metadata = {
  metadataBase: new URL('https://basafinder-clientside.vercel.app'), // may be it is not needed as i used it inside layout.tsx
  title: 'Update Profile',
};
