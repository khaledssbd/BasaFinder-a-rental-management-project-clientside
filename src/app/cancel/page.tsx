import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';
import Link from 'next/link';

const CancelPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="bg-red-100 p-3 rounded-full mb-5">
            <XCircle className="size-40 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Cancelled
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Your payment has been cancelled. If this was a mistake, you can try
            again.
          </p>

          <Link href="/rentals" legacyBehavior>
            <Button>Try Again</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
