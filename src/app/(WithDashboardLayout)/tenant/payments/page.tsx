import ManageTenantPayments from '@/components/modules/Payments/ManageTenantPayments';

const TenantPaymentsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  return (
    <div>
      <ManageTenantPayments page={page} />
    </div>
  );
};

export default TenantPaymentsPage;
