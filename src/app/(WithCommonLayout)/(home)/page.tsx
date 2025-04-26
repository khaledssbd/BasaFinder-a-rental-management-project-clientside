import HomePageRentals from '@/components/modules/Home/Rentals';
// import FeaturedRentals from '@/components/modules/home/FeaturedRentals';
// import FlashSale from '@/components/modules/home/FlashSale';
import HeroSection from '@/components/modules/Home/HeroSection';
import Banner from '@/components/modules/Home/Banner/Banner';
import BasaFinderParallax from '@/components/modules/Home/BasaFinderParallax';
import Testimonials from '@/components/modules/Home/Testimonials';
import Tips from '@/components/modules/Home/Tips';
import ProductCarouselNew from '@/components/modules/Home/ProductCarouselNew';
import Script from 'next/script';
import { homePageSchemaData } from '@/utils/SchemaData';
import { homePageMetadata } from '@/utils/Metadata';
import { Metadata } from 'next';

const HomePage = async () => {
  const schemaData = homePageSchemaData;

  return (
    <div className="md:mx-20 my-20 space-y-28">
      <Script
        id="schema-markup-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <HeroSection />
      <Banner />
      {/* as this is nextjs I am using const { data: rentals } = await getAllRentals() several time, but nextjs will call it totally once and share the result to all */}
      <HomePageRentals />
      <BasaFinderParallax />
      <Testimonials />
      <Tips />
      <ProductCarouselNew />

      {/* as this is nextjs I am using const { data: rentals } = await getAllRentals() several time, but nextjs will call it totally once and share the result to all */}
      {/* <FeaturedRentals /> */}
      {/* as this is nextjs I am using const { data: rentals } = await getAllRentals() several time, but nextjs will call it totally once and share the result to all */}
      {/* <FlashSale /> */}
    </div>
  );
};

export default HomePage;

export const metadata: Metadata = homePageMetadata;
