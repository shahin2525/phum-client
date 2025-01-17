import { ReactNode } from "react";
// import { currentToken } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";
import { selectCurrentToken } from "../../redux/feature/auth/authSlice";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(selectCurrentToken);
  // console.log(token);
  if (!token) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
