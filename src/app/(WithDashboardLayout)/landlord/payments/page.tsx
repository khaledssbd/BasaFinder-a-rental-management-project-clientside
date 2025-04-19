import ManageLandlordPayments from '@/components/modules/Payments/ManageLandlordPayments';

const LandlordPaymentsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  return (
    <div>
      <ManageLandlordPayments page={page} />
    </div>
  );
};

export default LandlordPaymentsPage;
