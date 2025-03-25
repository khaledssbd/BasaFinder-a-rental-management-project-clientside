import { Button } from '@/components/ui/button';
import BFContainer from '@/components/ui/core/BFContainer';
import RentalCard from '@/components/modules/Rentals/RentalCard';
import { getAllRentals } from '@/services/Rental';
import { IRental } from '@/types';
import Link from 'next/link';

const FeaturedRentals = async () => {
  const { data: rentals } = await getAllRentals();

  return (
    <div className="bg-white bg-opacity-50 pt-6 pb-8">
      <BFContainer>
        <div className="flex items-center justify-between ">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Featured Rentals
          </h2>
          <Link href="/rentals">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mt-10">
          {rentals?.slice(0, 5).map((rental: IRental, idx: number) => (
            <RentalCard key={idx} rental={rental} />
          ))}
        </div>
      </BFContainer>
    </div>
  );
};

export default FeaturedRentals;
