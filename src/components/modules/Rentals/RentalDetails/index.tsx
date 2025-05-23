'use client';

import RentalAgreementModal from '../RentalCard/RentalAgreementModal';
import RentalDetailsCarousel from './RentalDetailsCarousel';
import { IRental } from '@/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import RentalActionSkeleton from '../RentalCard/RentalActionSkeleton';
import { useUser } from '@/context/UserContext';

const RentalDetails = ({ rental }: { rental: IRental }) => {
  const { user, isLoading } = useUser();
  return (
    <Card className="md:mx-20 my-10 md:my-24 pb-10">
      {/* CardHeader */}
      <CardHeader className="relative">
        {/* Carousel */}
        <RentalDetailsCarousel rental={rental} />

        {rental?.isRented && (
          <div className="absolute left-10 top-10 bg-red-500 text-white text-xl px-2 rounded-full z-10">
            unavailable
          </div>
        )}
      </CardHeader>

      {/* CardContent */}
      <article>
        <CardContent className="mt-2">
          <CardTitle className="font-semibold cursor-pointer text-sm">
            <h1 className="text-lg font-semibold text-gray-800 text-center my-4">
              Location: {rental?.location}
            </h1>
          </CardTitle>

          <div className="my-3 py-3 border-y border-gray-300">
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

            <p>Description: {rental?.description}</p>
          </div>
        </CardContent>
      </article>

      {/* CardFooter */}
      <CardFooter className="block p-0">
        {isLoading ? (
          <RentalActionSkeleton />
        ) : (
          <div className="text-center">
            {/* Rental Agree Modal */}
            {!rental?.isRented && (
              <RentalAgreementModal rental={rental} user={user} />
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default RentalDetails;
