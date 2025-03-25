'use client';

import { useUser } from '@/context/UserContext';

const CommonDashboard = () => {
  const { user } = useUser();
  return (
    <div className="my-20 mx-4 md:mx-10">
      <h2 className="text-3xl text-center mb-10">
        <span>Hi, </span> {user?.name ? user?.name : 'Bro'}
      </h2>
      <h2 className="text-lg my-3">Welcome to BasaFinder! 🏡</h2>
      <h5 className="text-lg text-justify">
        We’re thrilled to have you here. At BasaFinder, our mission is to make
        finding your perfect home effortless and enjoyable. Whether you’re
        searching for a cozy apartment, a shared living space, or a
        family-friendly house, our platform connects you with the best rental
        options tailored to your needs. Explore our extensive listings, take
        advantage of exclusive rental deals, and experience a hassle-free way to
        secure your next home. Whether you’re a first-time renter or managing
        multiple properties, BasaFinder is here to simplify your journey.
      </h5>
      <h5 className="text-lg mt-3">Warm regards,</h5>
      <h5 className="text-lg">The BasaFinder Team 🚀</h5>
    </div>
  );
};
export default CommonDashboard;
