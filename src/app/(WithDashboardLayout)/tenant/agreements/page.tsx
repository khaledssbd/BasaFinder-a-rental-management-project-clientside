import ManageTenantAgreements from '@/components/modules/Agreements/ManageTenantAgreements';

const TenantAgreementsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  return (
    <div>
      <ManageTenantAgreements page={page} />
    </div>
  );
};

export default TenantAgreementsPage;
