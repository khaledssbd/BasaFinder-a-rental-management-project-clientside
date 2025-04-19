import ManageLandlordRentals from '@/components/modules/Rentals/ManageRentals/ManageLandlordRentals';

const LandlordManageRentalsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  return (
    <div>
      <ManageLandlordRentals page={page} />
    </div>
  );
};

export default LandlordManageRentalsPage;
