import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="wrapper">
        <div className="auth-brand">
          <Link to="/">
            <img
              className="logo"
              src="https://res.cloudinary.com/suraiya/image/upload/v1634195113/logo.png"
              alt="Veggy Brand Logo"
            />
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
