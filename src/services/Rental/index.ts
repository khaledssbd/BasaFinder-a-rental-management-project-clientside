'use server';

import { getValidToken } from '@/lib/verifyToken';
import { revalidateTag } from 'next/cache';
// import { cookies } from 'next/headers';

// add Rental
export const addRental = async (rentalData: FormData): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/rentals`, {
      method: 'POST',
      body: rentalData,
      headers: {
        Authorization: token,
      },
    });
    revalidateTag('RENTAL');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// get all Rentals
export const getAllRentals = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
): Promise<any> => {
  const params = new URLSearchParams();

  if (query?.maxRent) {
    params.append('minRent', '0');
    params.append('maxRent', query?.maxRent.toString());
  }

  if (query?.searchTerm) {
    params.append('searchTerm', query?.searchTerm.toString());
  }

  if (query?.isRented) {
    params.append('isRented', query?.isRented.toString());
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rentals?limit=${limit}&page=${page}&${params}`,
      {
        next: {
          tags: ['RENTAL'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

// get single Rental
export const getSingleRental = async (rentalId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rentals/${rentalId}`,
      {
        next: {
          tags: ['RENTAL'],
          revalidate: 1800, // Revalidate this page every 3600 seconds // this is not needed if I use export const revalidate: 3600; inside the rental page
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

// get Landlord Rentals
export const getLandlordRentals = async (
  page?: string,
  limit?: string
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rentals/landlord/mine?limit=${limit}&page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
        },
        next: {
          tags: ['RENTAL'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

// update rental
export const updateRental = async (
  rentalData: FormData,
  rentalId: string
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rentals/update/${rentalId}`,
      {
        method: 'PATCH',
        body: rentalData,
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag('RENTAL');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// delete rental
export const deleteRental = async (rentalId: string): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rentals/${rentalId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag('RENTAL');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
