import AllRentals from '@/components/modules/Rentals/AllRentals';
import RentalBanner from '@/components/modules/Rentals/Banner';
import BFContainer from '@/components/ui/core/BFContainer';
import Pagination from '@/components/ui/core/Pagination';
import { rentalsPageMetadata } from '@/contants';
import { getAllRentals } from '@/services/Rental';
import { Metadata } from 'next';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const AllRentalsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const { data: rentals, meta } = await getAllRentals(
    query.page as string,
    '12',
    query
  );

  return (
    <BFContainer>
      <RentalBanner title="All Rentals" path="Home - Rentals" />

      <AllRentals rentals={rentals} />
      <Pagination page={Number(query.page)} totalPage={meta?.totalPage} />
    </BFContainer>
  );
};

export default AllRentalsPage;

export const metadata: Metadata = rentalsPageMetadata;
