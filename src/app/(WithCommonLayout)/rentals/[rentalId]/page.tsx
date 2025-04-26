import RentalBanner from '@/components/modules/Rentals/Banner';
import RentalDetails from '@/components/modules/Rentals/RentalDetails';
import RentalNotFound from '@/components/modules/Rentals/RentalNotFound';
import BFContainer from '@/components/ui/core/BFContainer';
import { rentalDetailsMetaData } from '@/utils/Metadata';
import { rentalDetailsPageSchemaData } from '@/utils/SchemaData';
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

  const rentalDetailsSchemaData = rentalDetailsPageSchemaData(rental, rentalId);

  return (
    <>
      {/* for Schema Markup */}
      <Script
        id={`schema-markup-${rental._id}`}
        type="application/ld+json"
        // strategy="afterInteractive" not using is better for nextjs seo
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(rentalDetailsSchemaData),
        }}
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

  const metaData = rentalDetailsMetaData(rental);
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
