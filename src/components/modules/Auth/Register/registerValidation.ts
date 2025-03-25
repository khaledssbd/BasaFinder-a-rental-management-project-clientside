import { RegisterUserRole } from '@/types';
import { z } from 'zod';

export const registrationSchema = z.object({
  role: z.enum([...RegisterUserRole] as [string, ...string[]], {
    errorMap: () => ({
      message: "Role must be one of 'tenant' and 'landlord'!",
    }),
  }),

  name: z
    .string({ required_error: 'Name is required!' })
    .trim()
    .min(5, { message: 'Name must have minimum 5 characters!' })
    .max(30, { message: "Name can't exceed 30 characters!" }),

  image: z.custom<File>(file => file instanceof File, {
    message: 'Image is required!',
  }),

  email: z
    .string({ required_error: 'Email is required!' })
    .trim()
    .email({ message: 'Invalid email address!' }),

  password: z
    .string({ required_error: 'Password is required!' })
    .min(8, { message: "Password can't be less then 8 characters!" })
    .max(20, { message: "Password can't be more then 20 characters!" }),

  passwordConfirm: z
    .string({ required_error: 'Confirm Password is required!' })
    .min(1),
});
