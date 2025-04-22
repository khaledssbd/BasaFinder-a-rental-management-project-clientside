'use client';

import { LoaderPinwheel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { updateProfile } from '@/services/Auth';
import Link from 'next/link';

const UpdateProfileForm = () => {
  const { user, isLoading, setIsLoading } = useUser();

  const form = useForm({
    defaultValues: {
      name: user?.name || '',
      image: null,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const router = useRouter();

  const handleUpdate: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { image, ...userData } = data;

      const formData = new FormData();
      formData.append('data', JSON.stringify(userData));
      if (image) {
        formData.append('user', image);
      }

      const res = await updateProfile(formData);

      if (res?.success) {
        setIsLoading(!isLoading);
        toast.success(res?.message);
        router.push('/profile');
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-black dark:text-amber-500">
      <h2 className="text-xl sm:text-2xl mt-10 mb-5 text-center font-bold">
        Update Profile
      </h2>

      <Form {...form}>
        <form
          className="space-y-5 flex flex-col justify-center items-center w-full md:w-1/2"
          onSubmit={form.handleSubmit(handleUpdate)}
        >
          {/* FormField for name */}
          <FormField
            control={form.control}
            name="name"
            rules={{
              required: {
                value: true,
                message: 'Name is required!',
              },
              minLength: {
                value: 5,
                message: 'Name must have minimum 5 characters!',
              },
              maxLength: {
                value: 30,
                message: "Name can't exceed 30 characters!",
              },
            }}
            render={({ field }) => (
              <FormItem className="text-left w-2/3 md:w-full">
                <FormLabel className="mx-2 text-black dark:text-amber-500">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-black dark:text-white"
                    type="text"
                    placeholder="Your Name..."
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

          {/* FormField for image */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="text-left w-2/3 md:w-full">
                <FormLabel className="mx-2 text-black dark:text-amber-500">
                  Image
                </FormLabel>
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
                {form.getFieldState(field.name).error && (
                  <p className="text-red-500 text-sm">
                    {form.getFieldState(field.name).error?.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading}
            className="text-black hover:text-white bg-green-500 hover:bg-black w-20"
            type="submit"
          >
            {isSubmitting ? (
              <div className="animate-spin">
                <LoaderPinwheel />
              </div>
            ) : (
              'Update'
            )}
          </Button>
        </form>
      </Form>

      <p className="text-center mt-4">
        Want to check your profile?{' '}
        <Link href="/profile" className="text-blue-600 text-sm font-bold ml-2">
          Click here
        </Link>
      </p>
      <p className="text-center mt-4">
        Want to change your password?{' '}
        <Link
          href="/profile/change-password"
          className="text-blue-600 text-sm font-bold ml-2"
        >
          Click here
        </Link>
      </p>
    </div>
  );
};

export default UpdateProfileForm;
