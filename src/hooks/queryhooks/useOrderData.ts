import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { handleLogout } from "@/utils/handleLogout";
import { useQuery } from "@tanstack/react-query";

const fetchOrder = (orderId: string) => {
  const order = axiosProtectedInstance
    .get(`orders/${orderId}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          handleLogout();
        }
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return order;
};

export const useOrderData = (orderId: string) => {
  return useQuery({
    queryKey: ["Order", orderId],
    queryFn: () => fetchOrder(orderId),
  });
};
