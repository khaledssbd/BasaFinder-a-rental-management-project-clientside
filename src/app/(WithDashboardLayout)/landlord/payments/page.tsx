import ManageLandlordPayments from '@/components/modules/Payments/ManageLandlordPayments';
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
      <ManageLandlordPayments payments={data} meta={meta} page={page} />
    </div>
  );
};

export default LandlordPaymentsPage;
