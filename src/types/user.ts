export type TLoggedInUser = {
  email: string;
  name: string;
  image: string;
  role: 'tenant' | 'landlord' | 'admin';
};

export type TUser = {
  _id: string;
  email: string;
  name: string;
  image: string;
  role: 'tenant' | 'landlord' | 'admin';
  status: 'active' | 'blocked';
  isDeleted: boolean;
  updatedAt?: Date;
};
export const AUTH_ROLES = {
  tenant: 'tenant',
  landlord: 'landlord',
  admin: 'admin',
} as const;

// export type TAuthRole = typeof AUTH_ROLES[keyof typeof AUTH_ROLES];
export const RegisterUserRole = ['tenant', 'landlord'];
