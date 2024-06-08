import { axiosProtectedInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { handleLogout } from "@/utils/handleLogout";

const fetchUser = (id: string) => {
  const user = axiosProtectedInstance
    .get(`/users/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          handleLogout();
        }
        throw new Error(error?.response?.data?.error);
      } else throw error;
    });
  return user;
};

export const useUserData = (id: string | null) => {
  return useQuery({
    queryKey: ["User"],
    queryFn: () => (id ? fetchUser(id) : null),
    enabled: !!id,
  });
};
