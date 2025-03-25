import ResetPasswordForm from '@/components/modules/Auth/ResetPassword/ResetPasswordForm';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ResetPasswordPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const params = await searchParams;

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <ResetPasswordForm
        email={params.email as string}
        token={params.token as string}
      />
    </div>
  );
};

export default ResetPasswordPage;
