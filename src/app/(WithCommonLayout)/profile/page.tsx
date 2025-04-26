import Profile from '@/components/modules/Profile';
import { profilePageMetadata } from '@/utils/Metadata';
import { Metadata } from 'next';

const ProfilePage = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default ProfilePage;

export const metadata: Metadata = profilePageMetadata;
