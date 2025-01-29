import { ReactNode } from "react";
// import { currentToken } from "../../redux/feature/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";
import {
  logout,
  selectCurrentToken,
  selectCurrentUser,
  TUser,
} from "../../redux/feature/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRouteProps = {
  children: ReactNode;
  role: string | undefined;
};
const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  const token = useAppSelector(selectCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token) as TUser;
  }

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
