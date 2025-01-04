import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import HomeContent from "../pages/HomeContent/HomeContent";

const PrivateRoutes = () => {
  const { isLogin } = useContext(AuthContext);

  return !isLogin ? (
    <Navigate to="/login" />
  ) : (
    <HomeContent>
      <Outlet />
    </HomeContent>
  );
};

export default PrivateRoutes;
