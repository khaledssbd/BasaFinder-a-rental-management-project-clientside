import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/', // disallowed all paths under /admin/
        '/landlord/', // disallowed all paths under /landlord/
        '/tenant/', // disallowed all paths under /tenant/
        '/cancel',
        '/failed',
        '/offline',
        '/reset-password',
        '/success',
        '/validation',
        '/profile/', // disallowed all paths under /profile/
      ],
    },
    sitemap: 'https://basafinder-clientside.vercel.app/sitemap.xml', // sitemap URL
  };
}
