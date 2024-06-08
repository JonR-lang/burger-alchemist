import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

const fetchPopularProducts = () => {
  const PopularProducts = axiosInstance
    .get("products?sort=-sold")
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return PopularProducts;
};

export const usePopularProductsData = () => {
  return useQuery({
    queryKey: ["Popular Products"],
    queryFn: fetchPopularProducts,
  });
};
