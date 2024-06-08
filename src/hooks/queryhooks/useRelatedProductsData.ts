import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

const fetchRelatedProducts = () => {
  const RelatedProducts = axiosInstance
    .get("products?limit=5")
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return RelatedProducts;
};

export const useRelatedProductsData = () => {
  return useQuery({
    queryKey: ["Related Products"],
    queryFn: fetchRelatedProducts,
  });
};
