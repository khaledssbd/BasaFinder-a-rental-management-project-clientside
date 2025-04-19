import ManageLandlordAgreements from '@/components/modules/Agreements/ManageLandlordAgreements';
// import { getLandlordAgreements } from '@/services/Agreement';

const LandlordAgreementsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  return (
    <div>
      <ManageLandlordAgreements page={page} />
    </div>
  );
};

export default LandlordAgreementsPage;
