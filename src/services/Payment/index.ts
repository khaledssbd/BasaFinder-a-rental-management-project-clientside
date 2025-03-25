'use server';

import { FieldValues } from 'react-hook-form';
import { revalidateTag } from 'next/cache';
import { getValidToken } from '@/lib/verifyToken';
// import { cookies } from 'next/headers';

// create Payment
export const createPayment = async (paymentData: FieldValues): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/payments`, {
      method: 'POST',
      body: JSON.stringify(paymentData),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    revalidateTag('PAYMENTS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// get all Payments
export const getAllPayments = async (
  page?: string,
  limit?: string
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payments?limit=${limit}&page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
        },
        next: {
          tags: ['PAYMENTS'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// get Landlord Payments
export const getLandlordPayments = async (
  page?: string,
  limit?: string
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payments/landlord?limit=${limit}&page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
        },
        next: {
          tags: ['PAYMENTS'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// get Tenant Paymentys
export const getTenantPayments = async (
  page?: string,
  limit?: string
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payments/tenant?limit=${limit}&page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
        },
        next: {
          tags: ['PAYMENTS'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// validate Payment
export const validatePayment = async (tran_id: string): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payments/validate?tran_id=${tran_id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: token,
        },
      }
    );

    revalidateTag('PAYMENTS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
