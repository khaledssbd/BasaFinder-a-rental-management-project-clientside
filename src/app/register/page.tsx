import RegisterForm from '@/components/modules/Auth/Register/RegisterForm';
import { registerPageMetadata } from '@/contants';
import { Metadata } from 'next';

const RegisterPage = () => {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;

export const metadata: Metadata = registerPageMetadata;
