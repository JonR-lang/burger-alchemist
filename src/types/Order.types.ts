export type OrderItem = {
  product: {
    name: string;
    _id: string;
  };
  quantity: number;
  size: string;
  subTotal: number;
  _id: string;
};

export type Order = {
  _id: string;
  items: OrderItem[];
  couponApplied: boolean;
  status: string;
  totalAmount: number;
  orderedBy: {
    firstName: string;
    lastName: string;
    _id: string;
  };
  createdAt: string;
  updatedAt: string;
};
