import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { handleLogout } from "@/utils/handleLogout";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Address = {
  state: string;
  city: string;
  street: string;
  landmark?: string;
};

const saveAddress = (address: Address) => {
  const apiResponse = axiosProtectedInstance
    .put("/users/save-address", { address })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          handleLogout();
        }
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return apiResponse;
};

export const useSaveAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: saveAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Users"] });
    },
  });
};
