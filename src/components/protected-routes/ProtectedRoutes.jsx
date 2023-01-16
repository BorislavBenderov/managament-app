import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const ProtectedRoutes = ({ children }) => {
  const { loggedUser } = useContext(AuthContext);

  return loggedUser ? <Outlet /> : <Navigate to="/" />;
};
