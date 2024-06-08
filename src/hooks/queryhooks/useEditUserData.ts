import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { handleLogout } from "@/utils/handleLogout";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
};

type UpdateUserParams = {
  userId: string;
  user: User;
};

const updateUser = (user: User, userId: string) => {
  const apiResponse = axiosProtectedInstance
    .put(`/users/${userId}`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        handleLogout();
        throw new Error("Invalid Credentials!");
      } else {
        throw error;
      }
    });
  return apiResponse;
};

export const useEditUserData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ user, userId }: UpdateUserParams) =>
      updateUser(user, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["User"] });
    },
  });
};
