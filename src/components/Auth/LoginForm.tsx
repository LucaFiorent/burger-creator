import React, { FC, useState } from "react";
import MyButton from "../common/MyButton/MyButton";
import MyInput from "../common/MyInput/MyInput";
import { LoginFormProps } from "../../types/LoginTypes";
import "./LoginForm.css";

const LoginForm: FC<LoginFormProps> = ({ onSubmit, errMss }) => {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  // Function to handle form submission
  function submitHandler() {
    // Call the onSubmit prop with the user's input values
    onSubmit({
      name: userName,
      password: userPassword,
    });
    setUserName("");
    setUserPassword("");
  }

  return (
    <div>
      <div className="loginContainer">
        <h2 className="loginTitle">Sign In</h2>
        <div className="errMssWrapper">
          <h3>{errMss.title}</h3>
          <p>{errMss.errText}</p>
        </div>
        <div className="inputContainer">
          <MyInput
            type="text"
            label="Name"
            value={userName}
            setInputValue={setUserName}
            placeholder="Insert your name"
          />
          <MyInput
            type="password"
            label="Password"
            value={userPassword}
            setInputValue={setUserPassword}
            placeholder="Insert your password"
          />
        </div>
        <div className="buttonWrapper">
          <MyButton onClick={submitHandler}>Sign in</MyButton>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
