import ManageAdminRentals from '@/components/modules/Rentals/ManageRentals/ManageAdminRentals';

const AdminManageRentalsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  return (
    <div>
      <ManageAdminRentals page={page} />
    </div>
  );
};

export default AdminManageRentalsPage;
