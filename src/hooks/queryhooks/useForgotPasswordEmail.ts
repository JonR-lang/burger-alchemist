import { axiosInstance } from "@/utils/axiosConfig";
import { useMutation } from "@tanstack/react-query";

const inputEmail = (emailObj: { email: string }) => {
  const apiResponse = axiosInstance
    .post("auth/forgot-password-token", emailObj)
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

export const useForgotPasswordEmail = () => {
  return useMutation({
    mutationFn: inputEmail,
  });
};
