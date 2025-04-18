import CommonManagePayments from '@/components/modules/Payments/CommonManagePayments';
import { getLandlordPayments } from '@/services/Payment';

const LandlordPaymentsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getLandlordPayments(page, '10');

  return (
    <div>
      <CommonManagePayments payments={data} meta={meta} page={page} />
    </div>
  );
};

export default LandlordPaymentsPage;
