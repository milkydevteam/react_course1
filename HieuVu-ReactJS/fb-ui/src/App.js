import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './route/PrivateRoute';
import Home from "./pages/Profile";
import NewFeed from "./pages/NewFeed";
import LoginPage from "./pages/Login"
import { AuthContext } from "./context/auth";



function App(props) {

  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [isAuthenticate, changeAuthenticateStatus] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    changeAuthenticateStatus(data);
  }


  return (
    <AuthContext.Provider value={{ isAuthenticate, changeAuthenticateStatus: setTokens }}>
      <Router>
        
        
          <Route path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={NewFeed} />
        
      </Router>
    </AuthContext.Provider>
  );
}

export default App;