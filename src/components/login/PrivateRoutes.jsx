import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import env from "react-dotenv";

const PrivateRoute = ({ children, ...rest }) => {
  const user = localStorage.getItem("user");
  // const user = true
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
