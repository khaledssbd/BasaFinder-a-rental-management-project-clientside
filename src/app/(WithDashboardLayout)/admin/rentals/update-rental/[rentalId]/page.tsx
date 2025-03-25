import UpdateRentalForm from '@/components/modules/Rentals/UpdateRentalForm';
import { getSingleRental } from '@/services/Rental';

const LandlordUpdateRentalPage = async ({
  params,
}: {
  params: Promise<{ rentalId: string }>;
}) => {
  const { rentalId } = await params;

  const { data: rental } = await getSingleRental(rentalId);

  return (
    <div className="flex justify-center items-center">
      <UpdateRentalForm rental={rental} />
    </div>
  );
};

export default LandlordUpdateRentalPage;
