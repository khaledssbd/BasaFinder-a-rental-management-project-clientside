'use server';

// import { getNewToken } from '@/services/Auth';
import { jwtDecode } from 'jwt-decode';
import { cookies, headers } from 'next/headers';

export const isTokenExpired = async (token: string): Promise<boolean> => {
  if (!token) return true;

  try {
    const decoded: { exp: number } = jwtDecode(token);

    return decoded.exp * 1000 < Date.now();
  } catch (err: any) {
    console.error(err);
    return true;
  }
};

// export const getValidToken = async (): Promise<string> => {
//   const cookieStore = await cookies();

//   let token = cookieStore.get('accessToken')!.value;
//   const refreshToken = cookieStore.get('refreshToken')!.value;

//   if (!token || (await isTokenExpired(token))) {
//     const { data } = await getNewToken(refreshToken);
//     token = data?.accessToken;
//     (await cookies()).set('accessToken', token);
//   }

//   return token;
// };

export const getValidToken = async (): Promise<string> => {
  const headerList = await headers();
  const cookieStore = await cookies();

  // Prefer token from custom header (set by middleware if refreshed)
  const tokenFromHeader = headerList.get('X-Access-Token');
  const tokenFromCookie = cookieStore.get('accessToken')?.value;

  const token = tokenFromHeader || tokenFromCookie;
  return token as string;
};
