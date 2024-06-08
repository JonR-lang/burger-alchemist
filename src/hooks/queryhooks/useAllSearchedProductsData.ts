import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

type Prop = {
  search: string;
  isEnabled: boolean;
};

const fetchAllProducts = ({ search }: Omit<Prop, "isEnabled">) => {
  const params = {
    search: search || undefined,
    fields: "name", //This is because I want only the name field to be returned when using the search component.
  };

  const FoundProducts = axiosInstance
    .get(`products`, { params })
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return FoundProducts;
};

export const useSearchedProductsData = ({ search, isEnabled }: Prop) => {
  const queryKey = ["Products", { search }];

  return useQuery({
    queryKey: queryKey,
    queryFn: () =>
      fetchAllProducts({
        search,
      }),
    enabled: isEnabled,
  });
};
