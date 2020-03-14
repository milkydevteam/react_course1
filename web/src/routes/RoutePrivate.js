import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Background from '../components/Background';

function PrivateRoute({ component: Component, ...rest }) {
  let token = sessionStorage.getItem('token');
  // TODO
  // check xem co token hay khong?
  // neu co token, se call len server lay thong tin user or ...
  // neu khong co, thi redirect ve login

  if (!token) {
    return (
      <Redirect
        to={{
          pathname: '/auths/login',
        }}
      />
    );
  }

  return (
    <Route {...rest}>
      <Background>
        <Component />
      </Background>
    </Route>
  );
}

export default PrivateRoute;
