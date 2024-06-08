import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { handleLogout } from "@/utils/handleLogout";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const logout = () => {
  const message = axiosProtectedInstance
    .patch(`/auth/logout`)
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

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["User"] });
    },
  });
};
