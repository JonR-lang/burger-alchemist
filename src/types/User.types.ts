import { ProductCardType } from "./ProductCard.types";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  picturePath: string;
  mobile: string;
  role: string;
  cart: string;
  address: UserAddress;
  wishlist: ProductCardType[];
  refreshToken: string;
  _id: string;
  passwordChangedAt: string;
  passwordResetToken: string;
  passwordResetExpires: string;
};

export type LoggedInUser = {
  id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  role: string;
  accessToken: string;
};

export type UserAddress = {
  state: string;
  city: string;
  street: string;
  landmark?: string;
};
