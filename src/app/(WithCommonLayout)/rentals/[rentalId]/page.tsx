import RentalBanner from '@/components/modules/Rentals/Banner';
import RentalDetails from '@/components/modules/Rentals/RentalDetails';
import RentalNotFound from '@/components/modules/Rentals/RentalNotFound';
import BFContainer from '@/components/ui/core/BFContainer';
import { getAllRentals, getSingleRental } from '@/services/Rental';
import { IRental } from '@/types';
import { Metadata } from 'next';
import Script from 'next/script';

const RentalDetailsPage = async ({
  params,
}: {
  params: Promise<{ rentalId: string }>;
}) => {
  const { rentalId } = await params;

  const { data } = await getSingleRental(rentalId);
  const rental: IRental = data;

  if (!rental) return <RentalNotFound />; // return RentalNotFound component

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'RentalProperty',
    name: rental.location,
    description: rental.description,
    url: `https://basafinder-clientside.vercel.app/rentals/${rental._id}`,
    image: rental.images[0], // Assuming first image is the main image
    datePublished: rental.createdAt,
    dateModified: rental.updatedAt,
    address: {
      '@type': 'PostalAddress',
      streetAddress: rental.location, // Assuming location is the full address for now
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BDT', // Currency code for Bangladeshi Taka
      price: rental.rent,
      priceValidUntil: rental.updatedAt, // Update price validity if needed
      url: `https://basafinder-clientside.vercel.app/rentals/${rental._id}`,
    },
    numberOfRooms: rental.bedrooms,
    additionalType: 'https://schema.org/ApartmentComplex', // You can change this if it's a different property type
    author: {
      '@type': 'Person',
      name: rental.landlord?.name || 'Unknown Landlord', // Assuming the landlord object has a name property
    },
    isRented: rental.isRented,
    isDeleted: rental.isDeleted,
  };

  return (
    <>
      {/* for Schema Markup */}
      <Script
        id='schema-markup'
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <BFContainer>
        <RentalBanner
          title="Rental Details"
          path="Home - Rentals - Rental Details"
        />
        <RentalDetails rental={rental} />
      </BFContainer>
    </>
  );
};

export default RentalDetailsPage;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ rentalId: string }>;
}): Promise<Metadata> {
  const { rentalId } = await params;

  const { data } = await getSingleRental(rentalId);
  const rental: IRental = data;

  if (!rental) return { title: 'Rental Not Found' }; // return empty object

  const metaData = {
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
      url: `https://basafinder-clientside.vercel.app/rentals/${rental?._id}`,
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
  };

  return metaData;
}

export async function generateStaticParams(): Promise<{ rentalId: string }[]> {
  const { data: rentals } = await getAllRentals(); // fetching all rentals

  if (!rentals || !Array.isArray(rentals)) return []; // return empty array

  return rentals.map((rental: IRental) => ({
    rentalId: rental._id.toString(), // using _id as rentalId
  }));
}
export const dynamicParams = true; // Fallback for new pages for generateStaticParams
// export const revalidate = 3600; // Revalidate this page every 3600 seconds // this is not needed if I use revalidate: 3600, inside getSingleRental function
