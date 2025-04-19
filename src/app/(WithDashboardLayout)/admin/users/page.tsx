import AdminManageUsers from '@/components/modules/Users/AdminManageUsers';

const AdminManangeUsersPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  return (
    <div>
      <AdminManageUsers page={page} />
    </div>
  );
};

export default AdminManangeUsersPage;
