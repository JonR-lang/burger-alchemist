import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { handleLogout } from "@/utils/handleLogout";
import { useQuery } from "@tanstack/react-query";

const fetchUserWishlist = () => {
  const userWishlist = axiosProtectedInstance
    .get("users/wishlist")
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          handleLogout();
        }
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return userWishlist;
};

export const useWishlistData = (selectedField?: string) => {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: fetchUserWishlist,
    select: selectedField
      ? (data) => {
          return data.map((product: any) => product[selectedField]);
        }
      : undefined,
    staleTime: 1000 * 60 * 30,
  });
};
