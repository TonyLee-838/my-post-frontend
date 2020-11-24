import React, { FC, ReactElement } from "react";
import { Redirect } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactElement;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
}): ReactElement => {
  const token = sessionStorage.getItem("x-auth-token");

  return token ? <>{children}</> : <Redirect to="/login">{children}</Redirect>;
};

export default ProtectedRoute;
