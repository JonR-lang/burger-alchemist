import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { handleLogout } from "@/utils/handleLogout";
import { useMutation } from "@tanstack/react-query";

const applyCoupon = (coupon: string) => {
  const response = axiosProtectedInstance
    .post("/users/cart/apply-coupon", { coupon })
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
  return response;
};

export const useApplyCoupon = () => {
  return useMutation({
    mutationFn: applyCoupon,
  });
};
