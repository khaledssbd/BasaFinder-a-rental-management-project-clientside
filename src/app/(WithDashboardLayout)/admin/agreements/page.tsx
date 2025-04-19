import ManageAdminAgreements from '@/components/modules/Agreements/ManageAdminAgreements';

const LandlordAgreementsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  return (
    <div>
      <ManageAdminAgreements page={page} />
    </div>
  );
};

export default LandlordAgreementsPage;
