import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

const fetchFeaturedProducts = () => {
  const featuredProducts = axiosInstance
    .get("products?featured=true")
    .then((response) => response.data);
  return featuredProducts;
};

export const useFeaturedProductsData = () => {
  return useQuery({
    queryKey: ["Featured Products"],
    queryFn: fetchFeaturedProducts,
  });
};
