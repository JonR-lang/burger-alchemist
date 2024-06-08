import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { handleLogout } from "@/utils/handleLogout";
import { useQuery } from "@tanstack/react-query";

const fetchAllUserOrders = () => {
  const AllBlogs = axiosProtectedInstance
    .get("users/orders")
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          handleLogout();
        }
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return AllBlogs;
};

export const useAllUserOrders = () => {
  return useQuery({
    queryKey: ["Orders"],
    queryFn: fetchAllUserOrders,
  });
};
