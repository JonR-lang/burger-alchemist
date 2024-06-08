import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

type Prop = {
  blogId: string;
};

const fetchBlog = (blogId: string) => {
  const Blog = axiosInstance
    .get(`blogs/${blogId}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return Blog;
};

export const useBlogData = ({ blogId }: Prop) => {
  return useQuery({
    queryKey: ["Blogs", blogId],
    queryFn: () => fetchBlog(blogId),
  });
};
