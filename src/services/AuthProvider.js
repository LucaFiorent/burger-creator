import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();

  function login(token) {
    setAuthToken(token);
  }
  function logout() {
    setAuthToken("");
  }

  const value = {
    token: authToken,
    isLogin: !!authToken,
    login: login,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
