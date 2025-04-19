import ManageAdminPayments from '@/components/modules/Payments/ManageAdminPayments';

const AdminPaymentsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  return (
    <div>
      <ManageAdminPayments page={page} />
    </div>
  );
};

export default AdminPaymentsPage;
