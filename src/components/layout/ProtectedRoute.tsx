import { ReactNode } from "react";
// import { currentToken } from "../../redux/feature/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";
import {
  logout,
  selectCurrentToken,
  selectCurrentUser,
} from "../../redux/feature/auth/authSlice";

type TProtectedRouteProps = {
  children: ReactNode;
  role: string | undefined;
};
const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  const token = useAppSelector(selectCurrentToken);
  // console.log(token);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  // console.log(user);
  if (role !== undefined && user?.role !== role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
