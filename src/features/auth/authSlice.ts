import { createSlice } from "@reduxjs/toolkit";
import { LoggedInUser } from "@/types/User.types";

const initialState: { user: LoggedInUser | null } = {
  user: JSON.parse(localStorage.getItem("user")!) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("coupon");
      localStorage.removeItem("order");
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
