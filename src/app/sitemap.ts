import { websiteHomePageURL } from '@/constants';
import { getAllRentals } from '@/services/Rental';
import { IRental } from '@/types';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetching dynamic rental data
  const { data: rentals } = await getAllRentals();

  // Constructing the sitemap
  const sitemap = [
    {
      url: websiteHomePageURL,
      lastModified: new Date(),
      changeFrequency: 'daily', // homepage is changes often
      priority: 1.0,
    },
    {
      url: `${websiteHomePageURL}/add-rental`,
      lastModified: new Date(),
      changeFrequency: 'yearly', // add-rental route: rarely changes
      priority: 0.3,
    },
    {
      url: `${websiteHomePageURL}/register`,
      lastModified: new Date(),
      changeFrequency: 'yearly', // authentication route: rarely changes
      priority: 0.3,
    },
    {
      url: `${websiteHomePageURL}/login`,
      lastModified: new Date(),
      changeFrequency: 'yearly', // login route: rarely changes
      priority: 0.3,
    },
    {
      url: `${websiteHomePageURL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${websiteHomePageURL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${websiteHomePageURL}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${websiteHomePageURL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${websiteHomePageURL}/news`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${websiteHomePageURL}/rentals`,
      lastModified: new Date(),
      changeFrequency: 'daily', // new rentals are added daily
      priority: 0.9,
    },

    // rental details dynamically
    ...rentals.map((rental: IRental) => ({
      url: `${websiteHomePageURL}/rentals/${rental._id}`,
      lastModified: rental.updatedAt,
      changeFrequency: 'weekly', // rental info updates weekly
      priority: 0.8,
    })),
  ];

  return sitemap;
}
