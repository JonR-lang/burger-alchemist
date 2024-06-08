import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { handleLogout } from "@/utils/handleLogout";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Rating = {
  rating: {
    star: number;
    comment: string;
  };
  productId: string;
};

const rateProduct = ({ rating, productId }: Rating) => {
  const product = axiosProtectedInstance
    .put(`products/ratings/${productId}`, rating)
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
  return product;
};

export const useRateProduct = (productId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: rateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Products", productId] });
    },
  });
};
