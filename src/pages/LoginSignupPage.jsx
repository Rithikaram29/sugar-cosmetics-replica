import React from "react";
import "./loginSignupPage.css";
import Login from "../components/LoginSignup";

const LoginSignupPage = () => {
  return (
    <div className="loginpage">
      <div className="left-image"></div>
      <div>
        <Login className="login"/>
      </div>
    </div>
  );
};

export default LoginSignupPage;
