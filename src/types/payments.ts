import { IRental } from './rental';
import { TUser } from './user';

export type TPayments = {
  _id: string;
  agreement: string;
  rental: IRental;
  landlord: TUser;
  tenant: TUser;
  amount: number;
  status: 'Pending' | 'Paid' | 'Failed';
  paymentMethod: 'Cash' | 'Card' | 'Online';
  transactionId: string;
};
