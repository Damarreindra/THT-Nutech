import { Navigate, Outlet } from "react-router-dom";

const UnProtectedRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/home" />  : <Outlet />;
};

export default UnProtectedRoute;
