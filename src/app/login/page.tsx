import LoginForm from '@/components/modules/Auth/Login/LoginForm';

type SearchParams = Promise<{ [key: string]: string | undefined }>;

const LoginPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { redirectPath } = await searchParams;

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <LoginForm redirectPath={redirectPath} />
    </div>
  );
};

export default LoginPage;
