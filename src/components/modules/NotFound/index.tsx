'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import image from '@/assets/svgs/404.svg';
// import Error from './AllLootie/Error';

const NotFound = () => {
  const router = useRouter();

  return (
    <section className="">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <Image src={image} alt="404 Not Fount Image" />
          {/* <Error /> */}
          <h4 className="mt-3 text-2xl font-semibold text-black dark:text-amber-500 md:text-3xl">
            Wrong path browsing!
          </h4>
          <p className="mt-4 text-gray-400 ">Follow the links:</p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center w-1/2 px-5 py-1 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto   hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </button>

            <button
              onClick={() => router.push('/')}
              className="w-1/2 px-5 py-1 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100"
            >
              Take Me Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
