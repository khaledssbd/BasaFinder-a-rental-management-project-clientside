import RentalCard from '@/components/modules/Rentals/RentalCard';
import { IRental } from '@/types';
import FilterSidebar from '../FilterSidebar';

const AllRentals = ({ rentals }: { rentals: IRental[] }) => {
  return (
    <div className="flex flex-col gap-3 my-10">
      <FilterSidebar />

      <div className="mx-4 lg:mx-10">
        {rentals?.length === 0 ? (
          <h3 className="text-xl font-bold text-center">No Rental found</h3>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 lg:gap-10 mx-auto">
            {rentals?.map((rental: IRental, idx: number) => (
              <RentalCard key={idx} rental={rental} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRentals;
