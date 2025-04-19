'use client';
import { getAllRentals } from '@/services/Rental';
import { IRental } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// // Define the type for each product
// interface Product {
//   name: string;
//   image1: string;
//   image2: string;
//   title: string;
//   description: string;
//   buttonLink: string;
// }

// // Define the products array with the Product type
// const rentals: Product[] = [
//   {
//     name: 'HEAD SPA TRAY',
//     image1: '/path/to/head-spa-tray-1.jpg',
//     image2: '/path/to/head-spa-tray-2.jpg',
//     title: 'Head Spa Tray',
//     description:
//       'The Head Spa Tray is a portable solution for hair care professionals, offering a compact design for easy use in salons or at home.',
//     buttonLink: '/head-spa-tray',
//   },
//   {
//     name: 'MASSAGE CHAIR',
//     image1: '/path/to/massage-chair-1.jpg',
//     image2: '/path/to/massage-chair-2.jpg',
//     title: 'Massage Chair',
//     description:
//       'Our Massage Chair provides ultimate relaxation with adjustable settings, perfect for spa and wellness centers.',
//     buttonLink: '/massage-chair',
//   },
//   {
//     name: 'CAMERA',
//     image1: '/path/to/camera-1.jpg',
//     image2: '/path/to/camera-2.jpg',
//     title: 'Camera',
//     description:
//       'Capture every detail with our high-resolution Camera, designed for professional use in beauty and haircare settings.',
//     buttonLink: '/camera',
//   },
//   {
//     name: 'HAIRDRESSING CHAIR',
//     image1: '/path/to/hairdressing-chair-1.jpg',
//     image2: '/path/to/hairdressing-chair-2.jpg',
//     title: 'Hairdressing Chair',
//     description:
//       'The Hairdressing Chair offers ergonomic support and style, ideal for long hours in the salon.',
//     buttonLink: '/hairdressing-chair',
//   },
// ];

// Define the component as a functional component with TypeScript
const ProductCarouselNew = () => {
  const [rentals, setRentals] = useState<IRental[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(rentals.length - 1);

  useEffect(() => {
    const fetchRentals = async () => {
      const { data } = await getAllRentals();
      setRentals(data?.slice(0, 5));
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
            className={`flex-1 mx-1 transition-all duration-300 rounded-lg overflow-hidden bg-gray-100 ${
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
              className="w-full h-48 object-cover"
            />
            {activeIndex !== index && (
              <h3 className="text-center py-2 m-0 text-sm uppercase">
                {rental?.location}
              </h3>
            )}
          </div>
        ))}
      </div>
      <div className="text-center">
        <h2 className="text-2xl mb-3">{activeProduct?.location}</h2>
        <p className="text-base text-gray-600 max-w-xl mx-auto mb-5">
          {activeProduct?.description}
        </p>
        <Link href={`/rentals/${activeProduct?._id}`}>
          <button className="bg-[#f5e9d9] border-none py-2 px-5 rounded-full cursor-pointer text-sm uppercase hover:bg-[#e8d9c5] transition-colors">
            DISCOVER MORE ➔
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCarouselNew;
