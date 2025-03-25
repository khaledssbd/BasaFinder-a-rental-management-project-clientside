import ManageAdminRentals from '@/components/modules/Rentals/ManageRentals/ManageAdminRentals';

import { getAllRentals } from '@/services/Rental';

const LandlordManageRentalsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getAllRentals(page, '12');

  return (
    <div>
      <ManageAdminRentals rentals={data} meta={meta} page={page} />
    </div>
  );
};

export default LandlordManageRentalsPage;
