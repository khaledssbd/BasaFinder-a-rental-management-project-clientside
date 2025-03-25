import ManageLandlordRentals from '@/components/modules/Rentals/ManageRentals/ManageLandlordRentals';
import { getMyRentals } from '@/services/Rental';

const LandlordManageRentalsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getMyRentals(page, '12');

  return (
    <div>
      <ManageLandlordRentals rentals={data} meta={meta} page={page} />
    </div>
  );
};

export default LandlordManageRentalsPage;
