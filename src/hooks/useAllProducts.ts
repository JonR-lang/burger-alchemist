import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { ProductCardDetails } from "../types/ProductCard.types";

type Prop = {
  page: number;
};

const fetchAllProducts = (page: number) => {
  const AllProducts = axiosInstance
    .get(`products?page=${page}`)
    .then((response) => response.data);
  return AllProducts;
};

export const useAllProductsData = ({ page }: Prop) => {
  return useQuery({
    queryKey: ["Products", page],
    queryFn: () => fetchAllProducts(page),
  });
};
