import { IRental } from './rental';
import { TUser } from './user';

export type TAgreement = {
  _id: string;
  rental: IRental;
  landlord: TUser;
  landlordContactNo?: string;
  tenant: TUser;
  status: 'pending' | 'approved' | 'rejected';
  moveInDate: Date;
  durationMonth: number;
};
