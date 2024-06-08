import { axiosInstance } from "@/utils/axiosConfig";
import { useMutation } from "@tanstack/react-query";

type ContactForm = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const submitContactForm = (payload: ContactForm) => {
  const message = axiosInstance
    .post(`contact`, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error);
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return message;
};

export const useSubmitContactForm = () => {
  return useMutation({
    mutationFn: submitContactForm,
  });
};
