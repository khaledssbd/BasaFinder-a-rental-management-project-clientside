'use client';

import userImg from '@/assets/images/userImage.webp';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import { useUser } from '@/context/UserContext';
import Link from 'next/link';

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="text-black dark:text-amber-500">
      <h2 className="text-xl sm:text-2xl mt-10 mb-5 text-center font-bold">
        Profile
      </h2>
      <div className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="flex justify-center items-center my-10">
          <Image
            src={user?.image || userImg}
            alt="User Image"
            width={5000}
            height={5000}
            className="rounded-full w-48 h-48"
            data-tooltip-id="userName"
            data-tooltip-content={user?.name || 'No Name Set Yet'}
            data-tooltip-place="right"
          />
          <Tooltip id="userName" />
        </div>
        <div className="space-y-2 px-5">
          <h4 className="text-base font-medium text-left">
            Name:
            <span className="ml-2">
              {user?.name}
            </span>
          </h4>
          <h4 className="text-base font-medium text-left">
            Email:
            <span className="ml-2">
              {user?.email}
            </span>
          </h4>
          <h4 className="text-base font-medium text-left">
            Role:
            <span className="ml-2 capitalize">
              {user?.role}
            </span>
          </h4>
        </div>
      </div>

      <p className="text-center mt-10">
        Want to update your profile?{' '}
        <Link
          className="text-blue-600 text-sm font-bold ml-2"
          href="/profile/update-profile"
        >
          Click here
        </Link>
      </p>
      <p className="text-center mt-4">
        Want to change your password?{' '}
        <Link
          className="text-blue-600 text-sm font-bold ml-2"
          href="/profile/change-password"
        >
          Click here
        </Link>
      </p>
    </div>
  );
};

export default Profile;
