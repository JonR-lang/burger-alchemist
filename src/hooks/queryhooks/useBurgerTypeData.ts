import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

const fetchBurgerTypes = () => {
  const BurgerTypes = axiosInstance
    .get("burger-types?field=title,_id")
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return BurgerTypes;
};

export const useBurgerTypeData = () => {
  return useQuery({
    queryKey: ["Burger Types"],
    queryFn: fetchBurgerTypes,
  });
};
