import ChangePasswordForm from '@/components/modules/Profile/changePasswordForm';
import { changePasswordPageMetadata } from '@/utils/Metadata';
import { Metadata } from 'next';

const ChangePasswordPage = () => {
  return (
    <div>
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePasswordPage;

export const metadata: Metadata = changePasswordPageMetadata;
