import RentalBanner from '@/components/modules/Rentals/Banner';
import RentalDetails from '@/components/modules/Rentals/RentalDetails';
import BFContainer from '@/components/ui/core/BFContainer';
import { getSingleRental } from '@/services/Rental';

const RentalDetailsPage = async ({
  params,
}: {
  params: Promise<{ rentalId: string }>;
}) => {
  const { rentalId } = await params;

  const { data: rental } = await getSingleRental(rentalId);

  return (
    <BFContainer>
      <RentalBanner
        title="Rental Details"
        path="Home - Rentals - Rental Details"
      />
      <RentalDetails rental={rental} />
    </BFContainer>
  );
};

export default RentalDetailsPage;
