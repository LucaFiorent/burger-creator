import React, { FC, useState, useContext } from "react";
import LoginForm from "../../components/Auth/LoginForm";
import { login } from "../../services/auth";
import AuthContext from "../../services/AuthContext";
import {
  AuthContextProps,
  errMessType,
  userDataType,
} from "../../types/LoginTypes";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const navigate = useNavigate();
  const authCxt: AuthContextProps = useContext(AuthContext);

  // set 10 sec for test the auto logout
  // const time = 10000;
  const time = 10 * 60 * 1000; // 10 min

  const [errMss, setErrMss] = useState<errMessType>({
    title: "",
    errText: "",
  });
  const [timer, setTimer] = useState<number | null>(null);

  // Function to handle user login
  async function loginHandler(userData: userDataType) {
    try {
      const token = await login({
        name: userData.name,
        password: userData.password,
      });
      if (typeof token === "string") {
        // Token successfully retrieved
        // Reset error messages
        setErrMss({
          title: "",
          errText: "",
        });
        // login user
        authCxt.login(token);
        // Automatically log out when the time expires
        const logoutTimer = window.setTimeout(() => {
          console.log("logout");
          authCxt.logout();
        }, time); // 10 minutes
        setTimer(logoutTimer);
        navigate("/");
      }
    } catch (err) {
      // Handle login errors by setting an error message
      setErrMss({
        title: "Authentication Failed!",
        errText: "The insert user data are not correct, try again.",
      });
    }
  }

  function logoutHandler() {
    if (timer) clearTimeout(timer);
    navigate("/login");
  }

  // Function to handle form submission
  function submitHandler(userData: userDataType) {
    let { name, password } = userData;
    const passwordIsNotEmpty = password !== "";
    const nameIsNotEmpty = name !== "";

    if (!passwordIsNotEmpty || !nameIsNotEmpty) {
      setErrMss({
        title: "Authentication Failed!",
        errText: "The insert user data are not correct, try again.",
      });
      return;
    }
    loginHandler(userData);
  }

  return (
    <div className="sideContent">
      <LoginForm onSubmit={submitHandler} errMss={errMss} />
    </div>
  );
};

export default Login;
