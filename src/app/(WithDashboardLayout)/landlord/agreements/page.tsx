import ManageLandlordAgreements from '@/components/modules/Agreements/ManageLandlordAgreements';
import { getLandlordAgreements } from '@/services/Agreement';

const LandlordAgreementsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getLandlordAgreements(page, '10');

  return (
    <div>
      <ManageLandlordAgreements agrements={data} meta={meta} page={page} />
    </div>
  );
};

export default LandlordAgreementsPage;
