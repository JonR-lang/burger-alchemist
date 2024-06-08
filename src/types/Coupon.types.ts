export type CouponType = {
  message: string;
  coupon: {
    discount: number;
    name: string;
    expires: string;
    _id: string;
  };
} | null;
