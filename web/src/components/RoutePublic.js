import React from "react";
import { Route, Redirect } from "react-router-dom";

const RoutePublic = ({
  component: Component,
  isAuthenticated,
  to,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      console.log('loga-asdas')
      return isAuthenticated ? (
        <Redirect to={to} />
      ) : (
        <Component {...props} saveData={rest.saveData} />
      );
    }}
  />
);

RoutePublic.defaultProps = {
  to: "/private"
};

export default RoutePublic;
