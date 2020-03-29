import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import PublicPage from "./containers/public/PublicPage"
import ProtectedPage from "./containers/Protected"
import AuthButton from "./containers/auth/AuthButton"
import PrivateRoute from "./routes/PrivateRoute"
import Login from "./containers/Login"
import ProtectedPage2 from "./containers/Protected2"

function App() {
  return (
    <>
      {/* <AuthButton/> */}
      <Router>
      
        <Switch>  
          <Route exact path="/">
            <PublicPage />
            {/* <AuthButton /> */}
          </Route>
          {/* <Route exact path="/login">
            <Login />
          </Route> */}
          <PrivateRoute exact path="/protected">
            <ProtectedPage />
          </PrivateRoute>
          <PrivateRoute exact path="/protected2">
            <ProtectedPage2 />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
