import HomePageRentals from '@/components/modules/Home/Rentals';
// import FeaturedRentals from '@/components/modules/home/FeaturedRentals';
// import FlashSale from '@/components/modules/home/FlashSale';
import HeroSection from '@/components/modules/Home/HeroSection';
import Banner from '@/components/modules/Home/Banner/Banner';
import AboutBasaFinder from '@/components/modules/Home/AboutBasaFinder';
import Testimonials from '@/components/modules/Home/Testimonials';
import Tips from '@/components/modules/Home/Tips';
import ProductCarousel from '@/components/modules/Home/ProductCarousel';

const HomePage = async () => {
  return (
    <div className="md:mx-20 my-20 space-y-28">
      <HeroSection />
      <Banner />
      {/* as this is nextjs I am using const { data: rentals } = await getAllRentals() several time, but nextjs will call it totally once and share the result to all */}
      <HomePageRentals />
      <AboutBasaFinder />
      <Testimonials />
      <Tips />
      <ProductCarousel/>

      {/* as this is nextjs I am using const { data: rentals } = await getAllRentals() several time, but nextjs will call it totally once and share the result to all */}
      {/* <FeaturedRentals /> */}
      {/* as this is nextjs I am using const { data: rentals } = await getAllRentals() several time, but nextjs will call it totally once and share the result to all */}
      {/* <FlashSale /> */}
    </div>
  );
};

export default HomePage;
