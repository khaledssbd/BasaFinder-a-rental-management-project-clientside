import RegisterForm from '@/components/modules/Auth/Register/RegisterForm';
import { registerPageMetadata } from '@/utils/Metadata';
import { registerPageSchemaData } from '@/utils/SchemaData';
import { Metadata } from 'next';
import Script from 'next/script';

const RegisterPage = () => {
  const schemaData = registerPageSchemaData;

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <Script
        id="schema-markup-register"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;

export const metadata: Metadata = registerPageMetadata;
