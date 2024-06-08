import { axiosInstance } from "@/utils/axiosConfig";
import { useMutation } from "@tanstack/react-query";

const subscribeToNewsletter = (email: string) => {
  const apiResponse = axiosInstance
    .post(`newsletter/subscribe`, {
      email,
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

export const useSubscribeToNewsletter = () => {
  return useMutation({
    mutationFn: subscribeToNewsletter,
  });
};
