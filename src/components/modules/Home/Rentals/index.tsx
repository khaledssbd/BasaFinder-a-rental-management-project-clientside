import { Button } from '@/components/ui/button';
import BFContainer from '@/components/ui/core/BFContainer';
import Link from 'next/link';
import { getAllRentals } from '@/services/Rental';
import { IRental } from '@/types';
import RentalCard from '../../Rentals/RentalCard';

const HomePageRentals = async () => {
  const { data: rentals } = await getAllRentals();

  return (
    <BFContainer>
      {/* <div className="py-14 px-5 bg-gray-100"> */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Featured Rentals
          </h2>
          <Link href="/rentals">
            <Button variant="outline" className="rounded-full">
              View All
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {rentals?.slice(0, 6).map((rental: IRental, idx: number) => (
            <RentalCard key={idx} rental={rental} />
          ))}
        </div>
      {/* </div> */}
    </BFContainer>
  );
};

export default HomePageRentals;
