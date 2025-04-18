import CommonManagePayments from '@/components/modules/Payments/CommonManagePayments';
import { getAllPayments } from '@/services/Payment';

const AdminPaymentsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getAllPayments(page, '10');

  return (
    <div>
      <CommonManagePayments payments={data} meta={meta} page={page} />
    </div>
  );
};

export default AdminPaymentsPage;
