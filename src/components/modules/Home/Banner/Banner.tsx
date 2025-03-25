'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import banner1 from '@/assets/images/rooms/room-1.jpg';
import banner2 from '@/assets/images/rooms/room-2.jpg';
import banner3 from '@/assets/images/rooms/room-3.jpg';
import banner4 from '@/assets/images/rooms/room-4.jpeg';
import banner5 from '@/assets/images/rooms/room-5.png';
import banner6 from '@/assets/images/rooms/room-6.jpg';
import banner7 from '@/assets/images/rooms/room-7.jpg';
import banner8 from '@/assets/images/rooms/room-8.jpg';
import banner9 from '@/assets/images/rooms/room-9.jpg';
import banner10 from '@/assets/images/rooms/room-10.jpg';
import banner11 from '@/assets/images/rooms/room-11.jpg';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Banner = () => {
  const router = useRouter();

  const handleItemClick = () => {
    router.push('/rentals');
  };

  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        onClickItem={handleItemClick}
      >
        <Image src={banner1} alt="Room 1" />
        <Image src={banner2} alt="Room 2" />
        <Image src={banner3} alt="Room 3" />
        <Image src={banner4} alt="Room 4" />
        <Image src={banner5} alt="Room 5" />
        <Image src={banner6} alt="Room 6" />
        <Image src={banner7} alt="Room 7" />
        <Image src={banner8} alt="Room 8" />
        <Image src={banner9} alt="Room 9" />
        <Image src={banner10} alt="Room 10" />
        <Image src={banner11} alt="Room 11" />
      </Carousel>
    </div>
  );
};

export default Banner;
