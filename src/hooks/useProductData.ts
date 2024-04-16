import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

type Prop = {
  productId: string;
};

const fetchProduct = (productId: string) => {
  const Product = axiosInstance
    .get(`products/${productId}`)
    .then((response) => response.data);
  return Product;
};

export const useProductData = ({ productId }: Prop) => {
  return useQuery({
    queryKey: ["Products", productId],
    queryFn: () => fetchProduct(productId),
  });
};
