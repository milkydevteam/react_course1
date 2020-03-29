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
import AuthStatus from "./auth/AuthStatus"
import styled from "styled-components"

const LoginButton = styled.label`
    border-radius: 2px;
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
    line-height: 18px;
    padding: 2px 6px;
    text-align: center;
    text-decoration: none;
    text-shadow: none;
    vertical-align: top;
    white-space: nowrap;
`



export default function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    AuthStatus.authenticate(() => {
      history.replace(from);
    });
  };

  console.log("trigger")

  return (
    <LoginButton onClick={login} className="uiButtonConfirm">
      <input type="button" value="Đăng nhập" aria-label="Đăng nhập" className="LoginButton" />
    </LoginButton>
  );
}
