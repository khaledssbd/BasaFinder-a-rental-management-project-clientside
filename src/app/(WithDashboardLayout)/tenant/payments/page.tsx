import ManageTenantPayments from '@/components/modules/Payments/ManageTenantPayments';
import { getTenantPayments } from '@/services/Payment';

const TenantPaymentsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  const { data, meta } = await getTenantPayments(page, '10');

  return (
    <div>
      <ManageTenantPayments payments={data} meta={meta} page={page} />
    </div>
  );
};

export default TenantPaymentsPage;
