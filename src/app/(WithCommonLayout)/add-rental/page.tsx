import AddRentalForm from '@/components/modules/Rentals/AddRental/AddRentalForm';
import { addRentalPageMetadata } from '@/contants';
import { Metadata } from 'next';

const AddRentalPage = () => {
  return (
    <div className="flex justify-center items-center">
      <AddRentalForm />
    </div>
  );
};

export default AddRentalPage;


export const metadata: Metadata = addRentalPageMetadata;