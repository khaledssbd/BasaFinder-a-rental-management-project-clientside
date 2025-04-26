import UpdateProfileForm from '@/components/modules/Profile/updateProfileForm';
import { updateProfilePageMetadata } from '@/utils/Metadata';
import { Metadata } from 'next';

const UpdateProfilePage = () => {
  return (
    <div>
      <UpdateProfileForm />
    </div>
  );
};

export default UpdateProfilePage;

export const metadata: Metadata = updateProfilePageMetadata;
