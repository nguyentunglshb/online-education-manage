import { isUserLoggedIn } from "@utils";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LOGIN } from "./fn";

export const RequiredAuth = () => {
  const isAuth = isUserLoggedIn();
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={LOGIN} state={{ from: location }} replace />
  );
};
