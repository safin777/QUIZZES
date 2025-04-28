import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  if (!auth.accessToken) {
    return <Navigate to='/login' />;
  }
  return <Outlet />;

};

export default PrivateRoutes;
