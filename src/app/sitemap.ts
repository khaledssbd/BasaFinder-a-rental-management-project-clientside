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
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/terms-and-conditions',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/news',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://basafinder-clientside.vercel.app/rentals',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },

    // rental details dynamically
    ...rentals.map((rental: IRental) => ({
      url: `https://basafinder-clientside.vercel.app/rentals/${rental._id}`,
      lastModified: rental.updatedAt,
      changeFrequency: 'daily',
      priority: 0.6,
    })),
  ];

  return sitemap;
}
