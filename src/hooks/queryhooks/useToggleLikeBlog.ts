import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogCardDetails } from "@/types/BlogCard.types";
import { handleLogout } from "@/utils/handleLogout";

const toggleLikeBlog = (blog: BlogCardDetails) => {
  const apiResponse = axiosProtectedInstance
    .patch(`/blogs/likes/${blog._id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          handleLogout();
        }
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return apiResponse;
};

export const useToggleLikeBlog = ({
  blogId,
  userId,
}: {
  blogId: string;
  userId: string;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: toggleLikeBlog,
    onMutate: async () => {
      if (!userId) {
        throw new Error("You have to log in to do that!");
      }
      queryClient.cancelQueries({ queryKey: ["Blogs", blogId] });
      const queryData = queryClient.getQueryData(["Blogs", blogId]) || null;
      queryClient.setQueryData(
        ["Blogs", blogId],
        (oldQueryData: BlogCardDetails) => {
          if (oldQueryData.likes.includes(userId)) {
            oldQueryData.likes = oldQueryData.likes.filter(
              (likeId) => likeId !== userId
            );
            return { ...oldQueryData };
          } else {
            oldQueryData.likes.push(userId);
            return { ...oldQueryData };
          }
        }
      );

      return { queryData };
    },
    onError: (_error, _product, context) => {
      queryClient.setQueryData(["Blogs", blogId], context?.queryData);
    },
    onSettled: () => {
      //This ensures that client state is in sync with server state.
      queryClient.invalidateQueries({ queryKey: ["Blogs", blogId] });
    },
  });
};
