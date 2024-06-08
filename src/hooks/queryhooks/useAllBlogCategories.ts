import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

const fetchAllBlogCategories = () => {
  const AllBlogCategories = axiosInstance
    .get("blog-categories")
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return AllBlogCategories;
};

export const useAllBlogCategoriesData = () => {
  return useQuery({
    queryKey: ["Blog Categories"],
    queryFn: () => fetchAllBlogCategories(),
  });
};
