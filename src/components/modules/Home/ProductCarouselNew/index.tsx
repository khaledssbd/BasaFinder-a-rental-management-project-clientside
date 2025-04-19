'use client';
import { getAllRentals } from '@/services/Rental';
import { IRental } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const ProductCarouselNew = () => {
  const [rentals, setRentals] = useState<IRental[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(rentals.length - 1);

  useEffect(() => {
    const fetchRentals = async () => {
      const { data } = await getAllRentals();
      setRentals(data?.slice(5, 10)); // 5 6 7 8 9 taken
    };
    fetchRentals();
  }, []);

  // Set up the automatic switching every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex: number) =>
        prevIndex === rentals.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [rentals.length]);

  // Get the active product's details
  const activeProduct: IRental = rentals[activeIndex];

  return (
    <div className="mx-auto">
      <div className="flex justify-between mb-8">
        {rentals?.slice(0, 5).map((rental: IRental, index: number) => (
          <div
            key={index}
            className={`relative flex-1 mx-1 transition-all duration-300 rounded-lg overflow-hidden bg-gray-100 ${
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

            {/* Text over dark image */}
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
          {activeProduct?.description}
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
