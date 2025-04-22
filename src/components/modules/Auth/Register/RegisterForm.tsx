'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import Logo from '@/assets/svgs/Logo';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from './registerValidation';
import { registerUser } from '@/services/Auth';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { Eye, EyeOff, LoaderPinwheel } from 'lucide-react';
import { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { setIsLoading } = useUser();

  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const password = form.watch('password');
  const passwordConfirm = form.watch('passwordConfirm');
  const router = useRouter();

  const handleRegister: SubmitHandler<FieldValues> = async (data) => {
    if (!isChecked) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append('data', JSON.stringify(data));
      formData.append('user', data.image as File);

      const res = await registerUser(formData);

      if (res?.success) {
        setIsLoading(true);
        toast.success(res?.message);
        router.push('/');
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
          <h1 className="text-xl font-semibold">Register</h1>
          <p className="font-extralight text-sm text-gray-600">
            Join us today and start your journey!
          </p>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleRegister)}
          className="space-y-3 mt-5"
        >
          {/* FormField for User-Role */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mx-2">Account Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="text-black dark:text-white">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a type..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="landlord">Landlord</SelectItem>
                    <SelectItem value="tenant">Tenant</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* FormField for name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mx-2">Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name..."
                    {...field}
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* FormField for image */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mx-2">Image</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-300 text-black dark:text-amber-500 font-medium"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      field.onChange(e.target.files?.[0]);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                    autoComplete="email"
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
                <FormMessage />
              </FormItem>
            )}
          />

          {/* FormField for passwordConfirm */}
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mx-2">Confirm Password</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Confirm Password..."
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

                {passwordConfirm && password !== passwordConfirm ? (
                  <FormMessage> Password does not match </FormMessage>
                ) : (
                  <FormMessage />
                )}
              </FormItem>
            )}
          />
          {/* checkbox */}
          <div>
            <div className="text-left pl-1 mt-2">
              <input
                className="mr-1"
                onChange={(event) => setIsChecked(event.target.checked)}
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
              disabled={
                (passwordConfirm && password !== passwordConfirm) ||
                isSubmitting ||
                !isChecked
              }
              type="submit"
              className="mt-5 w-1/2"
            >
              {isSubmitting ? (
                <div className="animate-spin">
                  <LoaderPinwheel />
                </div>
              ) : (
                'Register'
              )}
            </Button>
          </div>
        </form>
      </Form>
      <p className="text-sm text-gray-600 text-center my-4">
        Already have an account?{' '}
        <Link href="/login" className="text-primary font-bold">
          Login
        </Link>
      </p>
    </div>
  );
}
