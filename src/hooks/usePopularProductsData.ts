import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { ProductCardDetails } from "../types/ProductCard.types";

const fetchPopularProducts = () => {
  const PopularProducts = axiosInstance
    .get("products")
    .then((response) => response.data);
  return PopularProducts;
};

export const usePopularProductsData = () => {
  return useQuery({
    queryKey: ["Popular Products"],
    queryFn: fetchPopularProducts,
  });
};
