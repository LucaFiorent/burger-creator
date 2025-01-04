import React, { Context } from "react";
import { AuthContextProps } from "../pages/Login/LoginTypes";

const AuthContext: Context<AuthContextProps> =
  React.createContext<AuthContextProps>({
    token: "",
    isLogin: false,
    login: (token: string) => {},
  });

export default AuthContext;
