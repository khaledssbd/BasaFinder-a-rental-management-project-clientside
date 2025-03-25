'use client';

import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import Logo from '@/assets/svgs/Logo';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUser, reCaptchaTokenVerification } from '@/services/Auth';
import { toast } from 'sonner';
import { loginSchema } from './loginValidation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { Eye, EyeOff, LoaderPinwheel } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import ForgotPasswordModal from './ForgotPasswordModal';

export default function LoginForm({ redirectPath }: { redirectPath: string  | undefined }) {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const { setIsLoading } = useUser();

  const [reCaptchaStatus, setReCaptchaStatus] = useState(false);

  // const searchParams = useSearchParams();
  // const redirectPath = searchParams.get('redirectPath');

  const router = useRouter();

  const handleReCaptcha = async (value: string | null) => {
    try {
      const res = await reCaptchaTokenVerification(value!);
      if (res?.success) {
        setReCaptchaStatus(true);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const handleLogin: SubmitHandler<FieldValues> = async data => {
    try {
      const res = await loginUser(data);
      if (res?.success) {
        setIsLoading(true);
        toast.success(res?.message);
        router.push(redirectPath || '/');
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="sm:border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
      <div className="flex items-center space-x-4 ">
        <Link href="/">
          <Logo />
        </Link>
        <div>
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm text-gray-600">Welcome back!</p>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="space-y-3 mt-5"
        >
          {/* FormField for email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mx-2">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email..."
                    {...field}
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* FormField for password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mx-2">Password</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password..."
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
                <FormMessage />
              </FormItem>
            )}
          />
          {/* ReCAPTCHA & submit-Button */}
          <div className="flex flex-col">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY!}
              onChange={handleReCaptcha}
              className="mx-auto my-5"
            />
            <Button
              disabled={reCaptchaStatus ? false : true}
              type="submit"
              className="mx-auto w-1/2"
            >
              {isSubmitting ? (
                <div className="animate-spin">
                  <LoaderPinwheel />
                </div>
              ) : (
                'Login'
              )}
            </Button>
          </div>
        </form>
      </Form>

      {/* ForgotPasswordModal */}
      <div className="my-3">
        <ForgotPasswordModal />
      </div>

      <p className="text-sm text-gray-600 text-center my-2">
        Do not have any account?{' '}
        <Link href="/register" className="text-primary font-bold">
          Register
        </Link>
      </p>
    </div>
  );
}
