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
  landlord: string;
  isRented: boolean;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
