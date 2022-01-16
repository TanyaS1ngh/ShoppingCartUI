import React from "react";
import "./styles.css";

const SignIn = () => {
  return (
    <div className="grid parent-container">
      <div className="col-offset-4 col-4 content-container">
        <h3 className="login-header">User Login</h3>
        <div className="rtb-separator"></div>
        <div className="login-inputs">
          <div>
            <div className="username-label py-2">Username:</div>
            <input
              className="py-2 my-2"
              type="text"
              placeholder="Enter username"
            />
            <div className="password-label py-2">Enter Password:</div>
            <input
              className="py-2 my-2"
              type="text"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="grid my-2">
          <button className="sign-in col-2 col-offset-5">Sign In</button>
          <a href="#" className="sign-up col-2 col-offset-5">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
