import { createPayment } from '@/services/Payment';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { TAgreement } from '@/types';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function CreatePaymentDialog({ agreement }: { agreement: TAgreement }) {
  const router = useRouter();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handlePayment = async (months: string[]) => {
    if (!months.length) {
      toast.error('Please select at least one month!');
      return;
    }

    try {
      const res = await createPayment({ months, agreement: agreement._id });

      if (res.success) {
        toast.success(res.message);
        // setTimeout(() => {
          router.push(res.data.paymentUrl);
        // }, 300);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Make Payment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make Payment</DialogTitle>
          <DialogDescription>
            Select months you want to make payment.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={e => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const selectedMonths = formData.getAll('months') as string[];
            handlePayment(selectedMonths);
          }}
        >
          <div className="grid grid-cols-2 gap-2">
            {months.map(month => (
              <label key={month} className="flex items-center space-x-2">
                <input type="checkbox" name="months" value={month} />
                <span>{month}</span>
              </label>
            ))}
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
