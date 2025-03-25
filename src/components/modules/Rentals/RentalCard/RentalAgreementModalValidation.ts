import { z } from 'zod';

export const rentalAgreementModalValidationSchema = z.object({
  durationMonth: z.coerce
    .number({ required_error: 'Duration month is required!' }) // converts from String to Number
    .positive()
    .min(1, 'Duration month must be a positive number'),

  // moveInDate: z.string({ required_error: 'Move-in date is required!' }),
  moveInDate: z.coerce
    .number({ required_error: 'Move-in date is required!' }) // converts from String to Number
    .positive('Move-in date must be a valid timestamp'), // Ensure it's a valid date
});
