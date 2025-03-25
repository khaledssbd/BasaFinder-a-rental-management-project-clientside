import { rentalAgreementModalValidationSchema } from './RentalAgreementModalValidation';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { CalendarIcon, LoaderPinwheel } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { requestAgreement } from '@/services/Agreement';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IRental, TLoggedInUser } from '@/types';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import Link from 'next/link';

const RentalAgreementModal = ({
  rental,
  user,
}: {
  rental: IRental;
  user: TLoggedInUser | null;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const form = useForm({
    resolver: zodResolver(rentalAgreementModalValidationSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const router = useRouter();

  const RentalAgreement: SubmitHandler<FieldValues> = async data => {
    if (!isChecked) {
      return;
    }

    try {
      const submitData = {
        ...data,
        moveInDate: data.moveInDate.toString(),
        rental: rental._id,
      };

      const res = await requestAgreement(submitData);

      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const pathname = usePathname();

  const handleButtonClick = () => {
    if (!user) {
      router.push(`/login?redirectPath=${pathname}`);
      toast.error('You must login to apply for a rental!');
      return;
    }
  };

  return (
    <>
      {!user ? (
        <Button
          onClick={handleButtonClick}
          size="sm"
          variant="default"
          className="text-black hover:text-white bg-green-500 hover:bg-black"
        >
          Agree to book
        </Button>
      ) : (
        user.role === 'tenant' && (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                variant="default"
                className="text-black hover:text-white bg-green-500 hover:bg-black"
              >
                Agree to book
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Fill-up the form carefully</DialogTitle>
                <DialogDescription>
                  Duration Month: Estimated months of stay. Move-In Date: Your
                  arrival date.
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form
                  className="space-y-3 mt-5"
                  onSubmit={form.handleSubmit(RentalAgreement)}
                >
                  {/* FormField for durationMonth */}
                  <FormField
                    control={form.control}
                    name="durationMonth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mx-2">Duration Month</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Duration month..."
                            {...field}
                            value={field.value || ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* FormField for moveInDate */}
                  <FormField
                    control={form.control}
                    name="moveInDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Move In Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'pl-3 text-left font-normal',
                                  !field.value && 'text-muted-foreground'
                                )}
                              >
                                {field.value ? (
                                  format(field.value, 'PPP')
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={date =>
                                field.onChange(date?.getTime() || null)
                              } // Convert to timestamp
                              disabled={date => date < new Date()} // stop selecting old date
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* checkbox */}
                  <div>
                    <div className="text-left pl-1 mt-2">
                      <input
                        className="mr-1"
                        onChange={event => setIsChecked(event.target.checked)}
                        type="checkbox"
                      />
                      <small className="text-sm mt-1">
                        Do you agree with our{' '}
                        <Link
                          href="/terms-and-conditions"
                          className="font-medium text-blue-500  hover:underline"
                        >
                          Terms & Conditions
                        </Link>
                        ?
                      </small>
                    </div>
                    {!isChecked && (
                      <small className="text-red-500 mt-1">
                        Please check on Terms & Conditions..
                      </small>
                    )}
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled={!isChecked}
                      className="mt-5 w-1/2"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin">
                          <LoaderPinwheel />
                        </div>
                      ) : (
                        'Submit'
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        )
      )}
    </>
  );
};

export default RentalAgreementModal;
