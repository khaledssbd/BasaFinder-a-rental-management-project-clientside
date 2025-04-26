import { Metadata } from 'next';
import { websiteHomePageURL } from '../constants';
import { IRental } from '@/types';

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
  metadataBase: new URL(websiteHomePageURL), // must use here
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
    title: 'Get rental in BasaFinder',
    description:
      'Looking for your next rental home? 🎯 BasaFinder makes it easy to discover verified listings, contact landlords, and move in stress-free. Start your rental journey with us today!',
    url: websiteHomePageURL,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder Preview Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get rental in BasaFinder',
    description:
      '🏠 Rent smart with BasaFinder! Find verified homes, talk to landlords directly, and move in faster. Your next home is just a few clicks away.',
    images: ['/og-image.png'],
  },
  robots: 'index, follow', // ডিফল্ট ইনডেক্সিং for all
};

// homePageMetadata
export const homePageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'BasaFinder - Find Trusted Rental Homes in Bangladesh',
  description:
    'Explore verified rental listings on BasaFinder. Find affordable and trusted houses for rent from verified landlords. Hassle-free browsing for students, families, and professionals.',
  keywords: [
    'BasaFinder',
    'rental homes Bangladesh',
    'houses for rent',
    'verified rental listings',
    'student housing',
    'family rentals',
    'trusted landlords',
    ...BasaFinderKeywords, // Including main keywords from original list
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'BasaFinder - Find Trusted Rental Homes in Bangladesh',
    description:
      'Explore verified rental listings on BasaFinder. Hassle-free browsing for students, families, and professionals looking for affordable and trusted houses for rent.',
    url: websiteHomePageURL,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder Home Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BasaFinder - Trusted Rental Listings',
    description:
      'Browse verified rental homes on BasaFinder. Affordable houses for rent from trusted landlords in Bangladesh.',
    images: ['/og-image.png'],
  },
  robots: 'index, follow',
};

// loginPageMetadata
export const loginPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'Login to BasaFinder',
    description:
      'Login to your BasaFinder account and start managing your rental properties or find a rental home. Secure access for landlords and tenants.',
    url: `${websiteHomePageURL}/login`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-login-image.png', // You might want to have a custom image for the login page
        width: 1200,
        height: 630,
        alt: 'BasaFinder Login Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Login to BasaFinder',
    description:
      'Login to your BasaFinder account to manage your rental properties or find a rental home. Secure access for landlords and tenants.',
    images: ['/og-login-image.png'],
  },
  robots: 'index, follow',
};

// registerPageMetadata
export const registerPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'Register to BasaFinder',
    description:
      'Create your BasaFinder account to start managing rental properties or finding your next home. Secure and easy access for both landlords and tenants.',
    url: `${websiteHomePageURL}/register`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-register-image.png', // You might want to have a custom image for the register page
        width: 1200,
        height: 630,
        alt: 'BasaFinder Register Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register to BasaFinder',
    description:
      'Sign up for BasaFinder to effortlessly manage your rental properties or discover your ideal home. Safe and seamless access for landlords and tenants alike.',
    images: ['/og-register-image.png'],
  },
  robots: 'index, follow',
};

// rentalsPageMetadata
export const rentalsPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'Rentals in BasaFinder',
    description:
      'Discover trusted rental listings on BasaFinder. Browse affordable homes from verified landlords — perfect for students, families, and professionals seeking a hassle-free experience.',
    url: `${websiteHomePageURL}/rentals`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-rentals-image.png', // You might want to have a custom image for the rentals page
        width: 1200,
        height: 630,
        alt: 'BasaFinder Rentals Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rentals in BasaFinder',
    description:
      'Find your next home easily with BasaFinder. Explore verified rental properties, connect with trusted landlords, and enjoy smooth, worry-free browsing for all renters.',
    images: ['/og-rentals-image.png'],
  },
  robots: 'index, follow',
};

// rentalDetailsMetaData
export const rentalDetailsMetaData = (rental: IRental): Metadata => ({
  title: rental?.location || 'Rental Details',
  // title: {
  //   absolute: rental?.location || 'Rental Details', // it will remove the default title given in main layout.js file
  // },
  description:
    rental?.description || 'Explore rental properties on BasaFinder.',
  keywords:
    rental?.description.split(' ') ||
    'BasaFinder, rental, rentals, tenant, tenants, landlord, landlords', // must use separate Array field on DB for keywords
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: `${rental?.location} | Rental Details - BasaFinder`,
    description:
      rental?.description || 'Explore rental properties on BasaFinder.',
    url: `${websiteHomePageURL}/rentals/${rental?._id}`,
    siteName: 'BasaFinder',
    images: rental.images?.length
      ? rental.images.map(image => ({
          url: image,
          width: 1200,
          height: 630,
          alt: 'BasaFinder Rental Preview Image',
        }))
      : [
          {
            url: '/default-rental-image.jpg',
            width: 1200,
            height: 630,
            alt: 'BasaFinder Default Image',
          },
        ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${rental?.location} | Rental Details - BasaFinder`,
    description:
      rental?.description || 'Explore rental properties on BasaFinder.',
    images: rental.images?.length
      ? rental.images.map(image => ({
          url: image,
          width: 1200,
          height: 630,
          alt: 'BasaFinder Rental Preview Image',
        }))
      : [
          {
            url: '/default-rental-image.jpg',
            width: 1200,
            height: 630,
            alt: 'BasaFinder Default Image',
          },
        ],
  },
});

// addRentalPageMetadata
export const addRentalPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'Add Rental in BasaFinder',
    description:
      'List your property on BasaFinder. Add detailed descriptions, set your rent price, and connect with verified tenants quickly and easily.',
    url: `${websiteHomePageURL}/add-rental`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-add-rental-image.png', // You might want to have a custom image for the add-rental page
        width: 1200,
        height: 630,
        alt: 'BasaFinder Add Rental Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add Rental in BasaFinder',
    description:
      'Create a rental listing on BasaFinder. Showcase your property details, set terms, and find trustworthy tenants without hassle.',
    images: ['/og-add-rental-image.png'],
  },
  robots: 'index, follow',
};

// aboutUsPageMetadata
export const aboutUsPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'About Us | BasaFinder',
    description:
      '🏡 Learn about BasaFinder’s journey — our mission to simplify renting for tenants and landlords alike. See how our values drive us to make finding a home easier and more trustworthy.',
    url: `${websiteHomePageURL}/about-us`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-about-us-image.png', // You might want to have a custom image for the about-us page
        width: 1200,
        height: 630,
        alt: 'BasaFinder About Us Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | BasaFinder',
    description:
      '🏡 Get to know BasaFinder — built with a passion to transform the rental experience. Discover our story, our commitment to reliability, and why we’re the trusted choice for renters and property owners.',
    images: ['/og-about-us-image.png'],
  },
  robots: 'index, follow',
};

// faqPageMetadata
export const faqPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'FAQs | BasaFinder',
    description:
      '🤔 Got questions about BasaFinder? Find quick answers in our FAQ — from account setup to rental safety tips. Everything you need to rent and list smarter is just a click away!',
    url: `${websiteHomePageURL}/faq`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-faq-image.png', // You might want to have a custom image for the faq page
        width: 1200,
        height: 630,
        alt: 'BasaFinder FAQs Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs | BasaFinder',
    description:
      '🤔 Curious about how BasaFinder works? Our FAQ section covers platform usage, property verification, security, and more. Get the clarity you need to rent or list confidently!',
    images: ['/og-faq-image.png'],
  },
  robots: 'index, follow',
};

// termsAndConditionsPageMetadata
export const termsAndConditionsPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'Terms & Conditions | BasaFinder',
    description:
      'By using BasaFinder, you accept our Terms & Conditions. Understand your responsibilities, rental policies, data protection measures, and the activities we prohibit to ensure a safe experience.',
    url: `${websiteHomePageURL}/terms-and-conditions`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-terms-and-conditions-image.png', // You might want to have a custom image for the terms-and-conditions page
        width: 1200,
        height: 630,
        alt: 'BasaFinder Terms & Conditions Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | BasaFinder',
    description:
      'When you use BasaFinder, you agree to our Terms and Conditions. Explore guidelines on user responsibilities, rental agreements, data security, and what’s not allowed on our platform.',
    images: ['/og-terms-and-conditions-image.png'],
  },
  robots: 'index, follow',
};

// privacyPolicyPageMetadata
export const privacyPolicyPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'Privacy Policy | BasaFinder',
    description:
      'At BasaFinder, your privacy matters. Discover what data we collect, how we use it, and the rights you have to protect and manage your personal information.',
    url: `${websiteHomePageURL}/privacy-policy`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-privacy-policy-image.png', // You might want to have a custom image for the privacy-policy page
        width: 1200,
        height: 630,
        alt: 'BasaFinder Privacy Policy Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | BasaFinder',
    description:
      'BasaFinder is dedicated to protecting your privacy. Learn how we handle your data, the purposes behind it, and the choices you have regarding your personal information.',
    images: ['/og-privacy-policy-image.png'],
  },
  robots: 'index, follow',
};

// newsPageMetadata
export const newsPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'News & Updates | BasaFinder',
    description:
      'Stay updated with BasaFinder’s latest news, market insights, feature releases, and expert tips for tenants and landlords.',
    url: `${websiteHomePageURL}/news`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-news-image.png', // You might want to have a custom image for the news page
        width: 1200,
        height: 630,
        alt: 'BasaFinder News & Updates Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Updates | BasaFinder',
    description:
      'Explore the latest BasaFinder updates, rental market trends, new features, and valuable tips for both tenants and landlords.',
    images: ['/og-news-image.png'],
  },
};

// Below are all disallowed to index to all crawllers
// cancelPageMetadata
export const cancelPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'Order Cancelled',
  description:
    'Your payment or booking process was cancelled. Return to BasaFinder to explore more rental listings and continue your search for the perfect home.',
  keywords: [
    'payment cancelled',
    'order cancelled',
    'BasaFinder cancellation',
    'rental booking cancelled',
    'cancelled transaction',
    'rental process cancellation',
    'BasaFinder support',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Order Cancelled | BasaFinder',
    description:
      'It looks like your payment or rental booking was cancelled. Come back to BasaFinder and find your next rental home easily.',
    url: `${websiteHomePageURL}/cancel`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-cancel-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder Cancel Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Order Cancelled | BasaFinder',
    description:
      'Your transaction was cancelled. Visit BasaFinder to find verified rental homes and restart your search journey today.',
    images: ['/og-cancel-image.png'],
  },
  robots: 'noindex, nofollow',
};

// failedPageMetadata
export const failedPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'Transaction Failed',
  description:
    'Unfortunately, your transaction could not be completed. Please try again or contact BasaFinder support for assistance.',
  keywords: [
    'payment failed',
    'transaction failed',
    'BasaFinder error',
    'rental booking failed',
    'payment declined',
    'BasaFinder support',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Transaction Failed | BasaFinder',
    description:
      'There was an issue with your payment or rental booking on BasaFinder. Please try again or contact support.',
    url: `${websiteHomePageURL}/failed`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-failed-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder Failed Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transaction Failed | BasaFinder',
    description:
      'Your transaction could not be completed. Please try again or contact BasaFinder support.',
    images: ['/og-failed-image.png'],
  },
  robots: 'noindex, nofollow',
};

// offlinePageMetadata
export const offlinePageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'Offline',
  description:
    'It looks like you are offline. Please check your internet connection and return to BasaFinder to continue browsing verified rental listings.',
  keywords: [
    'offline',
    'no internet connection',
    'BasaFinder offline',
    'rental browsing offline',
    'connection error',
    'internet issues',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Offline | BasaFinder',
    description:
      'You are currently offline. Reconnect to the internet to continue exploring rental listings on BasaFinder.',
    url: `${websiteHomePageURL}/offline`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-offline-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder Offline Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offline | BasaFinder',
    description:
      'You seem to be offline. Reconnect to continue using BasaFinder seamlessly.',
    images: ['/og-offline-image.png'],
  },
  robots: 'noindex, nofollow',
};

// resetPasswordPageMetadata
export const resetPasswordPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'Reset Password',
  description:
    'Reset your BasaFinder account password securely. Enter your new password and regain access to your rental management and browsing account.',
  keywords: [
    'reset password',
    'password recovery',
    'forgot password',
    'BasaFinder password reset',
    'account recovery',
    'change password',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Reset Password | BasaFinder',
    description:
      'Easily reset your BasaFinder password and continue managing your rental properties or searching for new homes.',
    url: `${websiteHomePageURL}/reset-password`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-reset-password-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder Reset Password Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reset Password | BasaFinder',
    description:
      'Forgot your password? Reset it easily and regain secure access to your BasaFinder account.',
    images: ['/og-reset-password-image.png'],
  },
  robots: 'noindex, nofollow',
};

// successPageMetadata
export const successPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'Success',
  description:
    'Your transaction was successful! Thank you for using BasaFinder. Continue browsing verified rental listings or manage your rental properties easily.',
  keywords: [
    'payment success',
    'order successful',
    'BasaFinder success',
    'rental booking successful',
    'successful transaction',
    'BasaFinder confirmation',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Success | BasaFinder',
    description:
      'Your transaction with BasaFinder was successful. Explore more verified rental properties and manage your rentals effortlessly.',
    url: `${websiteHomePageURL}/success`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-success-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder Success Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Success | BasaFinder',
    description:
      'Congratulations! Your payment or rental booking was successful. Keep browsing and managing rentals on BasaFinder.',
    images: ['/og-success-image.png'],
  },
  robots: 'noindex, nofollow',
};

// validationPageMetadata
export const validationPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'Validation',
  description:
    'Verify your BasaFinder account and ensure secure access to rental listings and property management features. Quick and easy validation process for all users.',
  keywords: [
    'BasaFinder validation',
    'account verification',
    'user validation',
    'secure login',
    'rental account validation',
    'BasaFinder account security',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Validation | BasaFinder',
    description:
      'Easily validate your BasaFinder account to securely access rental properties, manage listings, and stay protected. Fast, simple, and secure verification process.',
    url: `${websiteHomePageURL}/validation`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-validation-image.png', // You can prepare this image or reuse a similar one
        width: 1200,
        height: 630,
        alt: 'BasaFinder Account Validation Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Validation | BasaFinder',
    description:
      'Secure your BasaFinder experience by validating your account. Quick and safe verification to access all rental features.',
    images: ['/og-validation-image.png'],
  },
  robots: 'noindex, nofollow',
};

// dashboardLayoutAllPageMetadata
export const dashboardLayoutAllPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'Dashboard',
  description:
    'Access your BasaFinder dashboard to manage rental listings, view saved properties, update profile information, and monitor tenant or landlord activities seamlessly.',
  keywords: [
    'BasaFinder dashboard',
    'rental management dashboard',
    'tenant dashboard',
    'landlord dashboard',
    'property management',
    'account management',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Dashboard | BasaFinder',
    description:
      'Manage your rental activities with ease through the BasaFinder dashboard. Post listings, view rentals, update your profile, and track interactions effortlessly.',
    url: `${websiteHomePageURL}/landlord/dashboard`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-dashboard-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder Dashboard Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard | BasaFinder',
    description:
      'Stay on top of your rental management with BasaFinder’s powerful dashboard. Manage listings, tenants, and personal account settings easily.',
    images: ['/og-dashboard-image.png'],
  },
  robots: 'noindex, nofollow',
};

// profilePageMetadata
export const profilePageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'Profile',
  description:
    'View and manage your BasaFinder profile. Update your personal information, change your password, and customize your account settings for a better rental experience.',
  keywords: [
    'BasaFinder profile',
    'user profile',
    'profile management',
    'update profile',
    'change password',
    'account settings',
    'tenant profile',
    'landlord profile',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Profile | BasaFinder',
    description:
      'Manage and update your BasaFinder account profile, personal details, and password to ensure a secure and personalized rental journey.',
    url: `${websiteHomePageURL}/profile`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-profile-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder Profile Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profile | BasaFinder',
    description:
      'Access and manage your BasaFinder profile settings. Update your information and keep your account secure and personalized.',
    images: ['/og-profile-image.png'],
  },
  robots: 'noindex, nofollow',
};

// updateProfilePageMetadata
export const updateProfilePageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'Update Profile',
  description:
    'Easily update your BasaFinder profile details to keep your information accurate and up-to-date. Manage your rental journey with confidence.',
  keywords: [
    'update profile',
    'edit profile information',
    'BasaFinder profile update',
    'rental profile management',
    'tenant profile update',
    'landlord profile update',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Update Profile | BasaFinder',
    description:
      'Update your BasaFinder profile to ensure your rental information stays current. Manage your account easily and securely.',
    url: `${websiteHomePageURL}/profile/update-profile`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-update-profile-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder Update Profile Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Update Profile | BasaFinder',
    description:
      'Keep your BasaFinder account information accurate and updated. Manage your rental profile easily.',
    images: ['/og-update-profile-image.png'],
  },
  robots: 'noindex, nofollow',
};

// changePasswordPageMetadata
export const changePasswordPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'Change Password',
  description:
    'Securely change your BasaFinder account password. Update your password to keep your rental management account safe and protected.',
  keywords: [
    'change password',
    'update password',
    'BasaFinder account security',
    'rental account security',
    'password update',
    'account protection',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Change Password | BasaFinder',
    description:
      'Update your BasaFinder account password securely and protect your access to rental management and property browsing.',
    url: `${websiteHomePageURL}/profile/change-password`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-change-password-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder Change Password Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Change Password | BasaFinder',
    description:
      'Securely change your BasaFinder account password and keep your profile safe.',
    images: ['/og-change-password-image.png'],
  },
  robots: 'noindex, nofollow',
};

// notFoundPageMetadata
export const notFoundPageMetadata: Metadata = {
  metadataBase: new URL(websiteHomePageURL),
  title: 'Page Not Found',
  description:
    'Oops! The page you are looking for does not exist. Explore verified rental listings and find your next home easily on BasaFinder.',
  keywords: [
    '404 page',
    'page not found',
    'BasaFinder 404',
    'missing page',
    'rental listings',
    'home rental search',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Page Not Found | BasaFinder',
    description:
      'The page you are trying to reach does not exist. Browse verified rental listings or return to the BasaFinder homepage.',
    url: `${websiteHomePageURL}/404`,
    siteName: 'BasaFinder',
    images: [
      {
        url: '/og-404-image.png',
        width: 1200,
        height: 630,
        alt: 'BasaFinder 404 Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found | BasaFinder',
    description:
      'Looks like you’re lost! The page you’re searching for is unavailable. Visit BasaFinder to find verified rental listings.',
    images: ['/og-404-image.png'],
  },
  robots: 'noindex, nofollow',
};
