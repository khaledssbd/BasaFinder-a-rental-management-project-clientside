import AdminManageUsers from '@/components/modules/Users/AdminManageUsers';
import { getAllUsers } from '@/services/User';

const AdminManangeUsersPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  const { data, meta } = await getAllUsers(page, '10');

  return (
    <div>
      <AdminManageUsers users={data} meta={meta} page={page} />
    </div>
  );
};

export default AdminManangeUsersPage;
