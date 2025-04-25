import { getAllRentals } from '@/services/Rental';
import { IRental } from '@/types';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetching dynamic rental data
  const { data: rentals } = await getAllRentals();

  // Constructing the sitemap
  const sitemap = [
    {
      url: 'https://basafinder-clientside.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily', // homepage is changes often
      priority: 1.0,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/add-rental',
      lastModified: new Date(),
      changeFrequency: 'yearly', // add-rental route: rarely changes
      priority: 0.3,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/register',
      lastModified: new Date(),
      changeFrequency: 'yearly', // authentication route: rarely changes
      priority: 0.3,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/login',
      lastModified: new Date(),
      changeFrequency: 'yearly', // login route: rarely changes
      priority: 0.3,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/about-us',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/terms-and-conditions',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/news',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/rentals',
      lastModified: new Date(),
      changeFrequency: 'daily', // new rentals are added daily
      priority: 0.9,
    },

    // rental details dynamically
    ...rentals.map((rental: IRental) => ({
      url: `https://basafinder-clientside.vercel.app/rentals/${rental._id}`,
      lastModified: rental.updatedAt,
      changeFrequency: 'weekly', // rental info updates weekly
      priority: 0.8,
    })),
  ];

  return sitemap;
}
