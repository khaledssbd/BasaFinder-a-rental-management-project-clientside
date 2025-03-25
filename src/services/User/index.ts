'use server';

import { getValidToken } from '@/lib/verifyToken';
// import { FieldValues } from 'react-hook-form';
import { revalidateTag } from 'next/cache';
// import { cookies } from 'next/headers';

// get all users
export const getAllUsers = async (
  page?: string,
  limit?: string
): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users?limit=${limit}&page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
        },
        next: {
          tags: ['USERS'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// change user Role
export const changeUserRole = async ({
  role,
  userId,
}: {
  role: string;
  userId: string;
}): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/change-role/${userId}`,
      {
        method: 'PUT',
        body: JSON.stringify({ role }),
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );

    revalidateTag('USERS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// change user status
export const changeUserStatus = async ({
  status,
  userId,
}: {
  status: string;
  userId: string;
}): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/change-status/${userId}`,
      {
        method: 'PUT',
        body: JSON.stringify({ status }),
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );

    revalidateTag('USERS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
