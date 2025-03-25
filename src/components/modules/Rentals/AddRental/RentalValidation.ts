import { z } from 'zod';

export const rentalSchema = z.object({
  location: z
    .string({ required_error: 'Location is required!' })
    .trim()
    .min(2, { message: 'Location must have minimum 2 characters!' })
    .max(80, { message: 'Location cannot exceed 80 characters!' }),

  description: z
    .string({ required_error: 'Description is required!' })
    .min(20, { message: 'Description must have minimum 20 characters!' })
    .trim(),

  rent: z
    .string({ required_error: 'Rent is required!' })
    .min(1, 'Rent must be a positive number!'),

  bedrooms: z
    .string({ required_error: 'Bedrooms is required!' })
    .min(1, 'Bedrooms must be a positive number!'),
});
