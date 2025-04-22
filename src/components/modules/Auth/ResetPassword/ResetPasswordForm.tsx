'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Eye, EyeOff, LoaderPinwheel } from 'lucide-react';
import { toast } from 'sonner';
import { resetPassword } from '@/services/Auth';
import { useRouter } from 'next/navigation';

const ResetPasswordForm = ({
  email,
  token,
}: {
  email: string;
  token: string;
}) => {
  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form;

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleResetPassword: SubmitHandler<FieldValues> = async data => {
    if (!token || !email) {
      toast.error('Something went wrong! Please try again..!');
      return;
    }

    const res = await resetPassword(data, email, token);

    if (res?.success) {
      form.reset();
      toast.success(`${res?.message}... Login Now!`);
      router.push('/login');
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="py-12 md:w-1/2 w-full mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-500 text-center mb-4">
        Reset Password
      </h2>
      <Form {...form}>
        <form
          className="space-y-3 flex flex-col justify-center items-center"
          onSubmit={form.handleSubmit(handleResetPassword)}
        >
          {/* FormField for email */}
          {/* <FormField
            control={form.control}
            name="email"
            rules={{
              required: {
                value: true,
                message: 'You must write your email!',
              },
              validate: {
                isValid: value => {
                  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return true;
                  }
                  return 'Must use a valid email address!';
                },
              },
            }}
            render={({ field }) => (
              <FormItem className="text-left w-2/3 md:w-full">
                <FormLabel className="m-2 text-black dark:text-green-500">
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
          /> */}

          {/* FormField for newPassword */}
          <FormField
            control={form.control}
            name="newPassword"
            rules={{
              required: {
                value: true,
                message: 'You must write your new password!',
              },
              minLength: {
                value: 8,
                message: "Password can't be less then 8 characters!",
              },
              maxLength: {
                value: 20,
                message: "Password can't exceed 20 characters!",
              },
              validate: {
                isCapital: value => {
                  if (/(?=.*[A-Z])/.test(value)) {
                    return true;
                  }
                  return 'Password must have at least one Uppercase letter!';
                },
                isLower: value => {
                  if (/(?=.*[a-z])/.test(value)) {
                    return true;
                  }
                  return 'Password must have at least one lowercase letter!';
                },
                isNumeric: value => {
                  if (/(?=.*\d{2,})/.test(value)) {
                    return true;
                  }
                  return 'Password must have at least 2 numbers!';
                },
                isSpecialChar: value => {
                  if (
                    /(?=.*[!@#$%^&*()_+\-~=[\]{};'`:"\\|,.<>/?])/.test(value)
                  ) {
                    return true;
                  }
                  return 'Password must contain a symbol!';
                },
              },
            }}
            render={({ field }) => (
              <FormItem className="text-left w-2/3 md:w-full">
                <FormLabel className="m-2 text-black dark:text-green-500">
                  New Password
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      className="text-black dark:text-white"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Your password..."
                      autoComplete="new-password"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-2 cursor-pointer text-black"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </span>
                </div>
                {form.getFieldState(field.name).error && (
                  <p className="text-red-500 text-sm">
                    {form.getFieldState(field.name).error?.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          <Button
            disabled={isSubmitting}
            className="my-5 text-black bg-green-500 hover:bg-black hover:text-green-500  dark:text-black dark:hover:bg-white dark:hover:text-black"
            type="submit"
          >
            {isSubmitting ? (
              <div className="animate-spin">
                <LoaderPinwheel />
              </div>
            ) : (
              'Reset'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
