import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

const fetchAllBlogs = ({
  category,
  sort,
}: {
  category: string;
  sort: string;
}) => {
  const AllBlogs = axiosInstance
    .get("blogs", {
      params: { category: category || undefined, sort: sort || undefined },
    })
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return AllBlogs;
};

export const useAllBlogsData = ({
  category,
  sort,
}: {
  category: string;
  sort: string;
}) => {
  let queryKeyParams = {} as Record<string, string>;
  if (sort) queryKeyParams.sort = sort;
  if (category) queryKeyParams.category = category;

  return useQuery({
    queryKey: ["Blogs", queryKeyParams],
    queryFn: () => fetchAllBlogs({ category, sort }),
  });
};
