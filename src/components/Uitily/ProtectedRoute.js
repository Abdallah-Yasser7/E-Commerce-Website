import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ auth, children }) => {
  if (auth === false) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet/>;
};
