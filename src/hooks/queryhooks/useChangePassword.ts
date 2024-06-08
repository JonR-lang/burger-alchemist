import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { handleLogout } from "@/utils/handleLogout";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const changePassword = (password: { password: string }) => {
  const apiResponse = axiosProtectedInstance
    .put(`/auth/update-password`, password)
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

export const useChangePassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["User"] });
    },
  });
};
