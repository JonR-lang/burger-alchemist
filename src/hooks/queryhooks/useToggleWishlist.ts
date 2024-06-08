import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductCardType } from "@/types/ProductCard.types";
import { handleLogout } from "@/utils/handleLogout";

const toggleWishlist = (product: ProductCardType) => {
  const user = axiosProtectedInstance
    .patch(`/users/wishlist/${product._id}`, product._id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          handleLogout();
          throw new Error("You have to be logged in to do that!");
        }
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return user;
};

export const useToggleWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: toggleWishlist,
    //The below is performed if you do not want optimistic updates, you just invalidate the query so that it can refetch.

    /* onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ["wishlist"] });
     },*/

    //For optimistic updates - use use onMutate, onError and on Settled. Study the code below.
    onMutate: async (newData: ProductCardType) => {
      queryClient.cancelQueries({ queryKey: ["wishlist"] });

      const queryData: ProductCardType[] =
        queryClient.getQueryData(["wishlist"]) || [];

      queryClient.setQueryData(
        ["wishlist"],
        (oldQueryData: ProductCardType[] = []) => {
          const oldQueryDataIds = oldQueryData.map((item) => item._id);
          if (oldQueryDataIds.includes(newData._id)) {
            return oldQueryData.filter(
              (product) => product._id !== newData._id
            );
          } else {
            return [...oldQueryData, newData];
          }
        }
      );
      //the line of code below is neccessary in case an error occurs in the code above.
      return { queryData };
    },
    onError: (_error, _product, context) => {
      queryClient.setQueryData(["wishlist"], context?.queryData);
    },
    onSettled: () => {
      //This ensures that client state is in sync with server state.
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
};
