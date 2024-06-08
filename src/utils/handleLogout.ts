import { store } from "../store/store";
import { logoutUser } from "@/features/auth/authSlice";

export const handleLogout = () => {
  store.dispatch(logoutUser());
};
