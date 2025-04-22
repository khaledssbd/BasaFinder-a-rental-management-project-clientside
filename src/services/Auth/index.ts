'use server';

import { getValidToken } from '@/lib/verifyToken';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';

// register User
export const registerUser = async (userData: FormData): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/register`,
      {
        method: 'POST',
        body: userData,
        // headers: {
        //   'Content-Type': 'multipart/form-data', // by default 'Content-Type': 'multipart/form-data'
        // },
      }
    );
    const result = await res.json();

    if (result.success) {
      (await cookies()).set('accessToken', result.data.accessToken);
      (await cookies()).set('refreshToken', result?.data?.refreshToken);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// login User
export const loginUser = async (userData: FieldValues): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await res.json();

    if (result?.success) {
      (await cookies()).set('accessToken', result?.data?.accessToken);
      (await cookies()).set('refreshToken', result?.data?.refreshToken);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// get Current(logged-in) User
export const getCurrentUser = async (): Promise<any> => {
  const accessToken = (await cookies()).get('accessToken')?.value;
  let decodedData = null;

  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};

// google reCaptcha Token Verification
export const reCaptchaTokenVerification = async (
  token: string
): Promise<any> => {
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.NEXT_PUBLIC_RECAPTCHA_SERVER_KEY!,
        response: token,
      }),
    });

    const result = await res.json();
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

// update Profile
export const updateProfile = async (updateData: FormData): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/update-profile`,
      {
        method: 'POST',
        body: updateData,
        headers: {
          Authorization: token,
        },
      }
    );
    const result = await res.json();

    if (result.success) {
      (await cookies()).set('accessToken', result.data.accessToken);
      (await cookies()).set('refreshToken', result?.data?.refreshToken);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// change Password
export const changePassword = async (updateData: FieldValues): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/change-password`,
      {
        method: 'POST',
        body: JSON.stringify(updateData),
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// logOut (remove accessToken & refreshToken from cookies)
export const logOut = async (): Promise<void> => {
  (await cookies()).delete('accessToken');
  (await cookies()).delete('refreshToken');
};

// get New Token by refreshToken
export const getNewToken = async (refreshToken: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/refresh-token`,
      {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          // Authorization: (await cookies()).get('refreshToken')!.value,
          Authorization: refreshToken,
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// forgot password
export const forgotPassword = async (data: FieldValues): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/forgot-password`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// reset password
export const resetPassword = async (
  data: FieldValues,
  email: string,
  token: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/reset-password?email=${email}&token=${token}`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
