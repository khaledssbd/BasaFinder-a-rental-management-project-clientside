'use client';

import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { toast } from 'sonner';

type TResponse = {
  success: boolean;
  message: string;
  data: { transactionId: string };
};

type TProps = {
  response?: TResponse;
  icon: string;
  pageName: string;
  description: string;
  href: string;
  buttonText: string;
};

const PaymentAfter = ({
  response,
  icon,
  pageName,
  description,
  href,
  buttonText,
}: TProps) => {
  //   if (response && response.success) {
  //     toast.success(response.message);
  //   } else if (response && !response.success) {
  //     toast.error(response.message);
  //   }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 p-3 rounded-full mb-5">
            {icon === 'ShieldCheck' && (
              <ShieldCheck className="size-40 text-blue-500" />
            )}
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{pageName}</h1>
          {response && response.success && (
            <>
              <p className="text-gray-600 mb-3 text-center">
                TransactionId: {response.data?.transactionId}
              </p>
              <p className="text-gray-600 mb-6 text-center">{description}</p>
            </>
          )}

          <Link href={href} legacyBehavior>
            <Button>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentAfter;
