'use client';

import { getAllRentals } from '@/services/Rental';
import { IRental } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const ProductCarouselNew = () => {
  const [rentals, setRentals] = useState<IRental[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchRentals = async () => {
      const { data } = await getAllRentals();
      const slicedRentals = data?.slice(5, 10);
      setRentals(slicedRentals);
      setActiveIndex(slicedRentals.length - 1); // Default to last index when data loads
    };
    fetchRentals();
  }, []);

  const startInterval = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex(prevIndex =>
        prevIndex === rentals.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
  }, [rentals.length]);

  useEffect(() => {
    if (rentals.length > 0) {
      startInterval();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [rentals, startInterval]);

  const handleProductClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      startInterval(); // reset interval
    }
  };

  const activeProduct: IRental = rentals[activeIndex];

  return (
    <div className="mx-auto">
      <div className="flex justify-between mb-8">
        {rentals?.map((rental: IRental, index: number) => (
          <div
            key={index}
            onClick={() => handleProductClick(index)}
            className={`relative flex-1 mx-1 transition-all duration-300 rounded-lg overflow-hidden bg-gray-100 cursor-pointer ${
              activeIndex === index ? 'flex-[2]' : ''
            }`}
          >
            <Image
              src={
                activeIndex === index ? rental?.images[0] : rental?.images[1]
              }
              alt={rental?.location}
              height={500}
              width={500}
              className={`w-full h-48 object-cover transition-all duration-300 ${
                activeIndex !== index ? 'brightness-75 blur-sm' : ''
              }`}
            />

            {activeIndex !== index && (
              <h3 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-center text-sm uppercase z-10">
                {rental?.location}
              </h3>
            )}
          </div>
        ))}
      </div>

      <div className="text-center flex flex-col items-center min-h-[150px]">
        <h2 className="text-2xl mb-3">{activeProduct?.location}</h2>

        <p className="text-base text-gray-600 max-w-xl mx-auto mb-5">
          {activeProduct?.description.length > 90
            ? `${activeProduct?.description?.slice(0, 90)}...`
            : activeProduct?.description}
        </p>

        <div className="mt-auto">
          <Link href={'/rentals'}>
            <button className="bg-green-500 border-none py-2 px-5 rounded-full cursor-pointer text-sm uppercase hover:bg-[#e8d9c5] transition-colors">
              DISCOVER MORE ➔
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCarouselNew;
