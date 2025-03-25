import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required!' })
    .trim()
    .email({ message: 'Invalid email address!' }),

  password: z
    .string({ required_error: 'Password is required!' })
    .min(8, { message: "Password can't be less then 8 characters!" })
    .max(20, { message: "Password can't be more then 20 characters!" }),
});
