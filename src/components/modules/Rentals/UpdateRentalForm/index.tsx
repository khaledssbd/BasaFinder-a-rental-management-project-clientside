'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ImagePreviewer from '@/components/ui/core/BFImageUploader/ImagePreviewer';
import BFImageUploader from '@/components/ui/core/BFImageUploader';
import { rentalSchema } from '../AddRental/RentalValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import {
  LoaderPinwheel,
  // Plus
} from 'lucide-react';
import { updateRental } from '@/services/Rental';
import { useRouter } from 'next/navigation';
import Logo from '@/assets/svgs/Logo';
import { IRental } from '@/types';
import { useState } from 'react';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  FieldValues,
  SubmitHandler,
  // useFieldArray,
  useForm,
} from 'react-hook-form';

const UpdateRentalForm = ({ rental }: { rental: IRental }) => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>(
    rental?.images || []
  );

  const router = useRouter();

  const rentalValues = {
    location: rental?.location || '',
    description: rental?.description || '',
    rent: rental?.rent.toString() || '',
    bedrooms: rental?.bedrooms.toString() || '',
  };

  const form = useForm({
    defaultValues: rentalValues,
    resolver: zodResolver(rentalSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const handleUpdateRental: SubmitHandler<FieldValues> = async data => {
    if (imagePreview?.length < 3) {
      toast.error('Please upload at least 3 image!');
      return;
    }

    const modifiedData = {
      ...data,
      images: imagePreview.filter(url => url.includes('res.cloudinary.com')),
      rent: parseFloat(data.rent),
      bedrooms: parseInt(data.bedrooms),
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(modifiedData));

    for (const file of imageFiles) {
      formData.append('rental', file);
    }

    try {
      const res = await updateRental(formData, rental._id);

      if (res.success) {
        toast.success(res.message);
        router.push(`/rentals/${rental._id}`);
        // router.push(`/rentals/${res.data._id}`);
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

        <h1 className="text-xl font-bold">Update Rental</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleUpdateRental)}>
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
                'Update Rental'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UpdateRentalForm;
