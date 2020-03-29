import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import AuthStatus from "./AuthStatus"


export default  function AuthButton() {
    let history = useHistory();
  
    return AuthStatus.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            AuthStatus.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }
  