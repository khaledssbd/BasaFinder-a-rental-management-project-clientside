import LoginForm from '@/components/modules/Auth/Login/LoginForm';
import { loginPageMetadata } from '@/contants';
import { Metadata } from 'next';

type SearchParams = Promise<{ [key: string]: string | undefined }>;

const LoginPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { redirectPath } = await searchParams; // fixed the suspense alert for useSearchParams()

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <LoginForm redirectPath={redirectPath} />
    </div>
  );
};

export default LoginPage;

export const metadata: Metadata = loginPageMetadata;
