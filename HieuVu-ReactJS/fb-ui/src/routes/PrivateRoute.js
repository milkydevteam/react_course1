import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
  } from "react-router-dom";
import AuthStatus from "../containers/auth/AuthStatus"

export default function PrivateRoute({ children, ...rest }) {
  console.log(AuthStatus.isAuthenticated)  
  return (
      <Route
        {...rest}
        render={({ location }) =>
        AuthStatus.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }