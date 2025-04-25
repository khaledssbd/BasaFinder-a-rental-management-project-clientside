'use client';

import RentalAgreementModal from './RentalAgreementModal';
import { Button } from '@/components/ui/button';
import RentalCardCarousel from './RentalCardCarousel';
import { IRental } from '@/types';
import Link from 'next/link';
// import { Link } from 'next-view-transitions';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import RentalActionSkeleton from './RentalActionSkeleton';
import { useUser } from '@/context/UserContext';

const RentalCard = ({ rental }: { rental: IRental }) => {
  const { user, isLoading } = useUser();

  return (
    <Card className="p-3">
      {/* CardHeader */}
      <CardHeader className="relative p-0 h-48">
        {/* Carousel */}
        <RentalCardCarousel rental={rental} />

        {rental?.isRented && (
          <div className="absolute left-2 top-0 bg-red-500 text-white px-2 rounded-full z-10">
            unavailable
          </div>
        )}
      </CardHeader>
      {/* CardContent */}
      <CardContent className="p-0 mt-2">
        {/* <CardContent className="p-0 mt-20"> */}
        <CardTitle
          title={rental?.location}
          className="font-semibold cursor-pointer text-sm"
        >
          <h1 className="text-lg font-semibold text-gray-800 text-center my-4">
            Location: {rental.location}
          </h1>
        </CardTitle>

        <div className="my-3 py-3 border-y border-gray-300">
          <p>
            Description:{' '}
            {rental?.description.length > 20
              ? rental?.description?.slice(0, 20) + '...'
              : rental?.description}
          </p>

          <div className="flex items-center justify-between my-2">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">৳ {rental?.rent}</span>
            </p>

            <div className="flex items-center justify-center gap-1">
              Bedrooms:
              <span className="text-sm font-medium text-gray-700">
                {rental?.bedrooms}
              </span>
            </div>
          </div>
        </div>
      </CardContent>

      {/* CardFooter */}
      <CardFooter className="block p-0">
        {isLoading ? (
          <RentalActionSkeleton />
        ) : (
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-around">
            {/* View Details */}
            <Link href={`/rentals/${rental?._id}`}>
              <Button
                size="sm"
                variant="outline"
                // className="text-black hover:text-white bg-green-500 hover:bg-black"
              >
                View Details
              </Button>
            </Link>

            {/* Rental Agree Modal */}
            {!rental.isRented && (
              <RentalAgreementModal rental={rental} user={user} />
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default RentalCard;
