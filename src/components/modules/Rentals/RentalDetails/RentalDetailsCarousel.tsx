'use client';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IRental } from '@/types';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import 'swiper/css';

const RentalDetailsCarousel = ({ rental }: { rental: IRental }) => {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {rental?.images?.map((image, idx) => (
          <SwiperSlide key={idx} className="w-full mx-auto">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={image}
                alt="rental image"
                //   width={500}
                //   height={500}
                fill
                className="rounded-sm object-cover"
              />
            </div>
          </SwiperSlide>

          // <SwiperSlide key={idx} className="aspect-[16/9]">
          //   <Image
          //     src={image}
          //     fill
          //     alt="rental image"
          //     className="rounded-sm h-48 object-cover"
          //   />
          // </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RentalDetailsCarousel;
