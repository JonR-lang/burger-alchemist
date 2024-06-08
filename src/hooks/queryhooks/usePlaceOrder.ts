import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { handleLogout } from "@/utils/handleLogout";
import { useMutation } from "@tanstack/react-query";

type Order = {
  items: {
    product: string;
    quantity: string;
    size?: string;
  }[];
  address?: {
    state: string;
    city: string;
    street: string;
    landmark?: string;
  };
  coupon?: string;
};

const placeOrder = (order: Order) => {
  const createdOrder = axiosProtectedInstance
    .post("/orders", order)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          handleLogout();
        }
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return createdOrder;
};

export const usePlaceOrder = () => {
  return useMutation({
    mutationFn: placeOrder,
  });
};
