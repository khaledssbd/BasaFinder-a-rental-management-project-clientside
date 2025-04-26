import { IRental } from '@/types';
import {
  websiteFacebookPageURL,
  websiteHomePageURL,
  websiteLinkedinPageURL,
  websiteXPageURL,
} from '../constants';

// homePageSchemaData
export const homePageSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BasaFinder',
  url: websiteHomePageURL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${websiteHomePageURL}/rentals?searchTerm={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'BasaFinder',
    logo: {
      '@type': 'ImageObject',
      url: `${websiteHomePageURL}/icon.png`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+880-123-456-789',
      contactType: 'Customer Service',
    },
    sameAs: [websiteFacebookPageURL, websiteXPageURL],
  },
};

// rentalsPageSchemaData
export const rentalsPageSchemaData = (rentals: IRental[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: rentals.map((rental: IRental, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'RentalProperty',
      name: rental.location,
      url: `${websiteHomePageURL}/rentals/${rental._id}`,
      image: rental.images[0],
      description: rental.description,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BDT',
        price: rental.rent,
        availability: !rental.isRented
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      },
    },
  })),
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: websiteHomePageURL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Rentals',
        item: `${websiteHomePageURL}/rentals`,
      },
    ],
  },
});

// rentalDetailsPageSchemaData
export const rentalDetailsPageSchemaData = (
  rental: IRental,
  rentalId: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'RentalProperty',
  name: rental.location,
  description: rental.description,
  sku: rental?._id || rentalId,
  url: `${websiteHomePageURL}/rentals/${rental._id}`,
  image: rental.images[0], // Assuming first image is the main image
  datePublished: rental.createdAt,
  dateModified: rental.updatedAt,
  numberOfRooms: rental.bedrooms,
  additionalType: 'https://schema.org/ApartmentComplex', // You can change this if it's a different property type
  author: {
    '@type': 'Person',
    name: rental.landlord?.name || 'Unknown Landlord', // Assuming the landlord object has a name property
  },
  isRented: rental.isRented,
  isDeleted: rental.isDeleted,

  brand: {
    '@type': 'Brand',
    name: 'BasaFinder',
  },

  address: {
    '@type': 'PostalAddress',
    streetAddress: rental.location, // Assuming location is the full address for now
  },

  offers: {
    '@type': 'Offer',
    priceCurrency: 'BDT', // Currency code for Bangladeshi Taka
    price: rental.rent,
    priceValidUntil: rental.updatedAt, // Update price validity if needed
    availability: !rental.isRented
      ? 'https://schema.org/InStock'
      : 'https://schema.org/OutOfStock',
    url: `${websiteHomePageURL}/rentals/${rental._id}`,
  },

  //   aggregateRating: rental?.reviews?.length
  //     ? {
  //         '@type': 'AggregateRating',
  //         ratingValue:
  //           rental.reviews.reduce((sum, r) => sum + r.rating, 0) /
  //           rental.reviews.length,
  //         reviewCount: rental.reviews.length,
  //       }
  //     : undefined,
  //   review: rental?.reviews?.map(review => ({
  //     '@type': 'Review',
  //     author: { '@type': 'Person', name: review.author || 'Anonymous' },
  //     datePublished: review.date || new Date().toISOString(),
  //     reviewBody: review.comment,
  //     reviewRating: {
  //       '@type': 'Rating',
  //       ratingValue: review.rating,
  //     },
  //   })),

  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: websiteHomePageURL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Rentals',
        item: `${websiteHomePageURL}/rentals`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: rental?.location,
        item: `${websiteHomePageURL}/rentals/${rentalId}`,
      },
    ],
  },
});

// addRentalPageSchemaData
export const addRentalPageSchemadata = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Add Rental',
  url: `${websiteHomePageURL}/add-rental`,
  description:
    'Add a rental property on BasaFinder by providing details such as location, rent, number of bedrooms, description, and images. This form allows landlords to create verified listings for tenants to browse.',
  publisher: {
    '@type': 'Organization',
    name: 'BasaFinder',
    logo: {
      '@type': 'ImageObject',
      url: `${websiteHomePageURL}/icon.png`,
      width: 512,
      height: 512,
    },
  },
  mainEntity: {
    '@type': 'CreativeWork',
    name: 'BasaFinder Add Rental Form',
    text: 'The Add Rental form on BasaFinder enables landlords to list their properties by entering details like location, rent amount, number of bedrooms, a description, and uploading at least three images. The form ensures accurate data submission, validated through a secure process, and connects landlords with potential tenants.',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${websiteHomePageURL}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Add Rental',
        item: `${websiteHomePageURL}/add-rental`,
      },
    ],
  },
};

// loginPageSchemaData
export const loginPageSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Login Page',
  url: `${websiteHomePageURL}/login`,
  description:
    'Log in to your BasaFinder account to access personalized features and manage your orders.',
  publisher: {
    '@type': 'Organization',
    name: 'BasaFinder',
    logo: {
      '@type': 'ImageObject',
      url: `${websiteHomePageURL}/icon.png`,
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: websiteHomePageURL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Login',
        item: `${websiteHomePageURL}/login`,
      },
    ],
  },
};

// registerPageSchemaData
export const registerPageSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Register Page',
  url: `${websiteHomePageURL}/register`,
  description:
    'Sign up for a BasaFinder account to explore products and enjoy exclusive benefits.',
  publisher: {
    '@type': 'Organization',
    name: 'BasaFinder',
    logo: {
      '@type': 'ImageObject',
      url: `${websiteHomePageURL}/icon.png`,
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: websiteHomePageURL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Register',
        item: `${websiteHomePageURL}/register`,
      },
    ],
  },
};

// aboutUsPageSchemaData
export const aboutUsPageSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'About BasaFinder',
  url: `${websiteHomePageURL}/about-us`,
  author: {
    '@type': 'Person',
    name: 'Khaled Siddique',
  },
  description:
    'Learn about BasaFinder, an online platform dedicated to connecting tenants with landlords for seamless rental experiences. Discover our mission, values, and commitment to simplifying the rental process.',
  publisher: {
    '@type': 'Organization',
    name: 'BasaFinder',
    logo: {
      '@type': 'ImageObject',
      url: `${websiteHomePageURL}/icon.png`,
      width: 512,
      height: 512,
    },
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'BasaFinder',
    description:
      'BasaFinder is a trusted platform that simplifies the rental process by connecting tenants with verified landlords, offering secure and transparent property listings.',
    url: `${websiteHomePageURL}`,
    sameAs: [websiteFacebookPageURL, websiteXPageURL, websiteLinkedinPageURL],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${websiteHomePageURL}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: `${websiteHomePageURL}/about-us`,
      },
    ],
  },
};

// faqPageSchemaData
export const faqPageSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is BasaFinder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BasaFinder is an online platform that helps users find rental properties easily.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does BasaFinder work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BasaFinder connects tenants with landlords by providing a seamless platform for renting homes. Tenants can browse verified listings, and landlords can list their properties with ease.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is BasaFinder free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Browsing properties is completely free for tenants. However, landlords may need to pay a small fee for premium listings and promotional features.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my information secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we prioritize user data security and follow industry standards to protect your information.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I list my property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can list your property by creating an account and filling out the property details in the dashboard.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I contact a landlord?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each property listing has a "Contact Landlord" button, allowing you to directly message the property owner via our secure platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the property listings verified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We manually review all property listings to ensure authenticity and prevent fraud. Verified properties will have a verification badge.',
      },
    },
    {
      '@type': 'Question',
      name: 'How secure is the rental process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BasaFinder ensures a secure and transparent rental process with verified listings, secure messaging, and trusted payment options for deposits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I list my property on BasaFinder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! Landlords can sign up, submit their property details, and start receiving inquiries from potential tenants instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I contact a property owner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each listing includes a contact option that allows you to reach out to the property owner directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I face an issue with a landlord/tenant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have a dedicated support team to assist with any disputes or issues. You can report any concerns through our "Support" section.',
      },
    },
  ],
};

// termsAndConditionsPageSchemaData
export const termsAndConditionsPageSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms & Conditions',
  url: `${websiteHomePageURL}/terms-and-conditions`,
  description:
    'Review the terms and conditions for using BasaFinder, including user responsibilities, rental listings, privacy policies, prohibited activities, and contact information.',
  publisher: {
    '@type': 'Organization',
    name: 'BasaFinder',
    logo: {
      '@type': 'ImageObject',
      url: `${websiteHomePageURL}/icon.png`,
      width: 512,
      height: 512,
    },
  },
  mainEntity: {
    '@type': 'CreativeWork',
    name: 'BasaFinder Terms and Conditions',
    text: 'By using BasaFinder, you agree to these terms and conditions. Users are responsible for providing accurate information, and misuse may lead to account suspension. BasaFinder connects tenants and landlords but does not own or manage properties; users must verify listings. We prioritize privacy and adhere to our Privacy Policy. Prohibited activities include fraudulent listings, harassment, and unauthorized data use. Terms may be updated, and continued use implies acceptance. Contact us for any questions.',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${websiteHomePageURL}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Terms & Conditions',
        item: `${websiteHomePageURL}/terms-and-conditions`,
      },
    ],
  },
};

// privacyPolicyPageSchemaData
export const privacyPolicyPageSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  url: `${websiteHomePageURL}/privacy-policy`,
  description:
    'Learn how BasaFinder collects, uses, and protects your personal information. Our Privacy Policy outlines our commitment to safeguarding your data and your rights regarding its use.',
  publisher: {
    '@type': 'Organization',
    name: 'BasaFinder',
    logo: {
      '@type': 'ImageObject',
      url: `${websiteHomePageURL}/icon.png`,
      width: 512,
      height: 512,
    },
  },
  mainEntity: {
    '@type': 'CreativeWork',
    name: 'BasaFinder Privacy Policy',
    text: 'BasaFinder values your privacy and is committed to protecting your personal information. We collect data such as name, email, phone number, property details, and browsing data via cookies to enhance your experience. This information is used to connect tenants and landlords, improve services, process payments, and provide support. We do not sell or share your data without consent. Security measures are in place to protect your data, though no internet transmission is fully secure. You have the right to access, update, or delete your personal data, and can contact us to manage your preferences.',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${websiteHomePageURL}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Privacy Policy',
        item: `${websiteHomePageURL}/privacy-policy`,
      },
    ],
  },
};

// newsPageSchemaData
export const newsPageSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'News & Updates',
  url: `${websiteHomePageURL}/news`,
  datePublished: '2025-04-01',
  author: {
    '@type': 'Person',
    name: 'Khaled Siddique',
  },
  image: '/og-news-image.png',
  description:
    'Stay updated with the latest news, trends, and updates from BasaFinder. Insights on the rental market, new platform features, and expert tips for tenants and landlords.',
  articleBody:
    "Stay updated with the latest news, trends, and updates from BasaFinder. We bring you insights on the rental market, new features, and important announcements. Discover recent shifts in the rental market, pricing updates, and key insights that will help tenants and landlords make informed decisions. We are constantly working to improve your experience. Check out our latest platform features, security enhancements, and service upgrades. Get expert advice on house hunting, rental agreements, and making the most out of BasaFinder's features.",
  keywords: [
    'rental market',
    'BasaFinder updates',
    'house hunting tips',
    'real estate trends',
  ],
};

// contactPageSchemaData
// export const contactPageSchemaData = {
//   '@context': 'https://schema.org',
//   '@type': 'ContactPage',
//   name: 'Contact Us',
//   url: `${websiteHomePageURL}/contact`,
//   publisher: {
//     '@type': 'Organization',
//     name: 'BasaFinder',
//     contactPoint: {
//       '@type': 'ContactPoint',
//       telephone: '+880-123-456-789',
//       contactType: 'Customer Service',
//     },
//   },
// };
