'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import BFImageUploader from '@/components/ui/core/BFImageUploader';
import ImagePreviewer from '@/components/ui/core/BFImageUploader/ImagePreviewer';
import Logo from '@/assets/svgs/Logo';
import { addRental } from '@/services/Rental';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderPinwheel } from 'lucide-react';
import { rentalSchema } from './RentalValidation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const AddRentalForm = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(rentalSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const handleAddRental: SubmitHandler<FieldValues> = async data => {
    if (imageFiles?.length < 3) {
      toast.error('Please upload at least 3 image!');
      return;
    }

    const modifiedData = {
      ...data,
      rent: parseFloat(data.rent),
      bedrooms: parseInt(data.bedrooms),
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(modifiedData));

    for (const file of imageFiles) {
      formData.append('rental', file);
    }

    try {
      const res = await addRental(formData);

      if (res.success) {
        toast.success(res.message);
        // router.push('/landlord/rentals');
        router.push(`/rentals/${res.data._id}`);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5 ">
      <div className="flex items-center space-x-4 mb-5 ">
        <Logo />

        <h1 className="text-xl font-bold">Add Rental</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleAddRental)}>
          <p className="text-primary font-bold text-center text-xl border-t border-b py-3 my-5">
            Rental Information
          </p>

          {/* FormField for location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mx-2">Rental Location</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ''}
                    placeholder="Location..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-5">
            {/* FormField for rent */}
            <FormField
              control={form.control}
              name="rent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mx-2">Rent</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value || ''}
                      placeholder="Rent..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* FormField for bedrooms */}
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mx-2">Bedrooms</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value || ''}
                      placeholder="Bedrooms..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* FormField for description */}
          <div className="my-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mx-2">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 resize-none"
                      {...field}
                      value={field.value || ''}
                      placeholder="Description..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <p className="text-primary font-bold text-xl text-center border-t border-b py-3 my-5">
              Images
            </p>

            <div className="flex gap-4">
              <BFImageUploader
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                label="Upload Images"
                className="w-fit mt-0"
              />
              <ImagePreviewer
                className="flex flex-wrap gap-4"
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
              />
            </div>
          </div>

          <div className="text-center border-t py-3 my-5">
            <Button
              type="submit"
              className="mt-5 w-1/3"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="animate-spin">
                  <LoaderPinwheel />
                </div>
              ) : (
                'Add Rental'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default AddRentalForm;
