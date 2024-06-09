import { axiosInstance } from "@/utils/axiosConfig";
import { useMutation } from "@tanstack/react-query";

type Credentials = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
};

const register = (credentials: Credentials) => {
  const user = axiosInstance
    .post("/auth/register", credentials)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        throw new Error("Invalid Credentials!");
      } else {
        throw error;
      }
    });
  return user;
};

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: register,
  });
};
