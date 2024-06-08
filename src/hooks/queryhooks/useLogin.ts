import { axiosInstance } from "@/utils/axiosConfig";
import { useMutation } from "@tanstack/react-query";

const login = (credentials: { email: string; password: string }) => {
  const user = axiosInstance
    .post("/auth/login", credentials)
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

export const useLoginUser = () => {
  return useMutation({
    mutationFn: login,
  });
};
