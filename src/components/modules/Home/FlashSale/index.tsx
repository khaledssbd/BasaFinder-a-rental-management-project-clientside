import { Button } from '@/components/ui/button';
import BFContainer from '@/components/ui/core/BFContainer';
import RentalCard from '@/components/modules/Rentals/RentalCard';
import { IRental } from '@/types';
import Link from 'next/link';
import CountDown from './CountDown';
import { getAllRentals } from '@/services/Rental';

const FlashSale = async () => {
  const { data: rentals } = await getAllRentals();

  return (
    <div className=" bg-white bg-opacity-50 pt-6 pb-8">
      <BFContainer>
        <div className="flex items-center justify-between gap-2 lg:gap-8">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Flash Sale
            </h2>
            <CountDown />
          </div>

          <Link href="/rentals">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {rentals?.slice(0, 4)?.map((rental: IRental, idx: number) => (
            <RentalCard key={idx} rental={rental} />
          ))}
        </div>
      </BFContainer>
    </div>
  );
};

export default FlashSale;
