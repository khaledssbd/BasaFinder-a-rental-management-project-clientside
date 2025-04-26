import LoginForm from '@/components/modules/Auth/Login/LoginForm';
import { loginPageMetadata } from '@/utils/Metadata';
import { loginPageSchemaData } from '@/utils/SchemaData';
import { Metadata } from 'next';
import Script from 'next/script';

type SearchParams = Promise<{ [key: string]: string | undefined }>;

const LoginPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { redirectPath } = await searchParams; // fixed the suspense alert for useSearchParams()
  const schemaData = loginPageSchemaData;

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <Script
        id="schema-markup-login"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <LoginForm redirectPath={redirectPath} />
    </div>
  );
};

export default LoginPage;

export const metadata: Metadata = loginPageMetadata;
