'use client';

// import { Button } from '@/components/ui/button';
import Image from 'next/image';
// import BFContainer from '@/components/ui/core/BFContainer';
import styles from './HeroSection.module.css';
import niceImg from '@/assets/images/nice.png';
import { Typewriter } from 'react-simple-typewriter';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div
      className={`${styles.banner} p-6 md:p-14 rounded-3xl flex flex-col justify-center items-center`}
    >
      <Image
        className="w-20 mb-5 md:mb-8"
        src={niceImg}
        alt="BasaFinder"
        data-aos="zoom-in-up"
      />
      <h3
        className="text-3xl md:text-4xl font-black my-5 bg-gradient-to-r from-[#605dff] via-blue-600 to-[#f43098] bg-300% text-transparent bg-clip-text animate-gradient"
        data-aos="fade-up-right"
      >
        BasaFinder
      </h3>

      <h3
        className="text-xl font-bold md:text-4xl bg-gradient-to-r from-[#605dff] via-green-600 to-[#f43098] bg-300% text-transparent bg-clip-text animate-gradient"
        data-aos="fade-down-right"
      >
        Experience the pinnacle of modern living with BasaFinder!
      </h3>
      <h5 className="font-inter mt-10 md:mt-20 text-sm text-justify font-normal text-white md:text-lg px-3 min-h-56 md:min-h-24">
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          <Typewriter
            words={[
              'Discover the future of urban living with BasaFinder! Our dedicated team ensures your comfort and convenience, offering tailored services to meet your needs. Enjoy exclusive amenities and elevate your lifestyle in our luxurious spaces. Experience the best of city living with BasaFinder today!',
            ]}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </h5>
      <Link href="/rentals">
        <Button
          size="lg"
          className="rounded-full text-black hover:text-white bg-green-500 hover:bg-black"
        >
          All Rentals
        </Button>
      </Link>
    </div>
  );
};

export default HeroSection;
