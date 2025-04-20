import ManageAdminAgreements from '@/components/modules/Agreements/ManageAdminAgreements';
import { getAdminAgreements } from '@/services/Agreement';

const LandlordAgreementsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  const { data, meta } = await getAdminAgreements(page, '10');

  return (
    <div>
      <ManageAdminAgreements agrements={data} meta={meta} page={page} />
    </div>
  );
};

export default LandlordAgreementsPage;
