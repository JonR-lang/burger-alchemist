import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "@/store/store";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const { pathname } = useLocation();

  if (!user) return <Navigate to='/login' state={{ path: pathname }} />;
  return children;
};

export default ProtectedRoutes;
