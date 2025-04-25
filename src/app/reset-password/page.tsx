import ResetPasswordForm from '@/components/modules/Auth/ResetPassword/ResetPasswordForm';
import { resetPasswordPageMetadata } from '@/contants';
import { Metadata } from 'next';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const metadata: Metadata = resetPasswordPageMetadata;

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
