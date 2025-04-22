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
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { forgotPassword } from '@/services/Auth';

const ForgotPasswordModal = () => {
  const [open, setOpen] = useState(false);
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;

  const handleForgotPassword: SubmitHandler<FieldValues> = async data => {
    const res = await forgotPassword(data);
    
    if (res?.success) {
      form.reset();
      setOpen(false);
      toast.success(`${res?.message} Check mail...`);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="text-start w-full">
          <h5 className="text-red-500 dark:text-white text-sm font-medium">
            Forgot password?
          </h5>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Input Email</DialogTitle>
          <DialogDescription className="sr-only">
            Input your email
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-3"
            onSubmit={form.handleSubmit(handleForgotPassword)}
          >
            {/* FormField for email */}
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: 'You must write your email.',
                },
                validate: {
                  isValid: value => {
                    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                      return true;
                    }
                    return 'Must use a valid email address';
                  },
                },
              }}
              render={({ field }) => (
                <FormItem className="text-left w-2/3 md:w-full">
                  <FormLabel className="m-2 text-black dark:text-amber-500">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-black dark:text-white"
                      type="text"
                      placeholder="Your email..."
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

export default ForgotPasswordModal;
