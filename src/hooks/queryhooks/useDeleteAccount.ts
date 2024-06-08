import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { handleLogout } from "@/utils/handleLogout";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteUser = (userId: string) => {
  const message = axiosProtectedInstance
    .delete(`/users/${userId}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          handleLogout();
        }
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });

  return message;
};

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["User"] });
    },
  });
};
