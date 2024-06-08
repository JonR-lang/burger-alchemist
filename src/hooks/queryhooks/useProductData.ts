import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

type Prop = {
  productId: string;
};

const fetchProduct = (productId: string) => {
  const Product = axiosInstance
    .get(`products/${productId}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return Product;
};

export const useProductData = ({ productId }: Prop) => {
  return useQuery({
    queryKey: ["Products", productId],
    queryFn: () => fetchProduct(productId),
  });
};
