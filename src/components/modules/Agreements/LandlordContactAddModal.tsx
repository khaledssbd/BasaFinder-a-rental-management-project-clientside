import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { LoaderPinwheel } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
} from '@/components/ui/form';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { addLandlordContactNumber } from '@/services/Agreement';

const LandlordContactAddModal = ({ agreementId }: { agreementId: string }) => {
  const [open, setOpen] = useState(false);
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;

  const handleLandlordContactAdd: SubmitHandler<FieldValues> = async data => {
    const res = await addLandlordContactNumber(data, agreementId);

    if (res?.success) {
      form.reset();
      setOpen(false);
      toast.success(res?.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="text-start w-full">
          <h5
            className="text-sm font-medium p-2 w-fit text-black bg-green-500 rounded-md hover:bg-red-500 hover:text-white"
            title="Add your contact number"
          >
            Add Contact
          </h5>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Input Phone Number</DialogTitle>
          <DialogDescription className="sr-only">
            Input your 11 digit BD phone number
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-3"
            onSubmit={form.handleSubmit(handleLandlordContactAdd)}
          >
            {/* FormField for landlordContactNo */}
            <FormField
              control={form.control}
              name="landlordContactNo"
              rules={{
                required: {
                  value: true,
                  message: 'You must write your phone number!',
                },
                validate: {
                  isValid: value => {
                    if (/^01\d{9}$/.test(value)) {
                      return true;
                    }
                    return 'Must use a valid phone number!';
                  },
                },
              }}
              render={({ field }) => (
                <FormItem className="text-left w-2/3 md:w-full">
                  <FormLabel className="m-2 text-black dark:text-amber-500">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-black dark:text-white"
                      type="text"
                      placeholder="Your phone..."
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  {form.getFieldState(field.name).error && (
                    <p className="text-red-500 text-sm">
                      {form.getFieldState(field.name).error?.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button disabled={isSubmitting} className="mt-5" type="submit">
                {isSubmitting ? (
                  <div className="animate-spin">
                    <LoaderPinwheel />
                  </div>
                ) : (
                  'Submit'
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LandlordContactAddModal;
