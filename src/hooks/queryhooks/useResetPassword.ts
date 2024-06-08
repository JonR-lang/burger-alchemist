import { axiosInstance } from "@/utils/axiosConfig";
import { useMutation } from "@tanstack/react-query";

const resetPassword = (resetCredentials: {
  token: string;
  password: string;
}) => {
  const apiResponse = axiosInstance
    .put(`auth/reset-password/${resetCredentials.token}`, {
      password: resetCredentials.password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return apiResponse;
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
  });
};
