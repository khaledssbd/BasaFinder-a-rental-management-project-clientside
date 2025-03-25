'use server';

import { getValidToken } from '@/lib/verifyToken';
import { revalidateTag } from 'next/cache';
// import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';

// request Agreement
export const requestAgreement = async (
  agreementData: FieldValues
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/agreements`, {
      method: 'POST',
      body: JSON.stringify(agreementData),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    revalidateTag('AGREEMENT');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// get admin Agreements
export const getAdminAgreements = async (
  page?: string,
  limit?: string
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/agreements?limit=${limit}&page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
        },
        next: {
          tags: ['AGREEMENT'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// get Landlord Agreements
export const getLandlordAgreements = async (
  page?: string,
  limit?: string
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/agreements/landlord?limit=${limit}&page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
        },
        next: {
          tags: ['AGREEMENT'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// get Tenant Agreements
export const getTenantAgreements = async (
  page?: string,
  limit?: string
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/agreements/tenant?limit=${limit}&page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
        },
        next: {
          tags: ['AGREEMENT'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// update Agreement Status
export const updateAgreementStatus = async (
  status: string,
  agreementId: string
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/agreements/status/${agreementId}`,
      {
        method: 'PUT',
        body: JSON.stringify({ status }),
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );

    revalidateTag('AGREEMENT');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// add Landlord Contact Number
export const addLandlordContactNumber = async (
  data: FieldValues,
  agreementId: string
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/agreements/landlord-contact-no/${agreementId}`,
      {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );

    revalidateTag('AGREEMENT');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// delete Agreement
export const deleteAgreement = async (agreementId: string): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/agreements/${agreementId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }
    );

    revalidateTag('AGREEMENT');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
