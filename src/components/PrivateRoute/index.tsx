import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = sessionStorage.getItem("jwtToken");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
