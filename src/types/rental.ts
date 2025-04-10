import { TUser } from "./user";

export interface IRental {
  _id: string;
  location: string;
  description: string;
  rent: number;
  bedrooms: number;
  // bathrooms: number;
  // balcony: number;
  // area: number;
  images: string[];
  landlord: TUser;
  isRented: boolean;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
