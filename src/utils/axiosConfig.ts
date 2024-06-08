import axios from "axios";

type User = {
  id: string;
  picturePath: string;
  accessToken: string;
  role: string;
  firstName: string;
  lastName: string;
};

const BASE_URL = import.meta.env.VITE_API_URL;
const localhost = "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const axiosProtectedInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosProtectedInstance.interceptors.request.use((config) => {
  const user: User = JSON.parse(localStorage.getItem("user")!);
  config.headers.Authorization = `Bearer ${user && user.accessToken}`;
  return config;
});
