import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import RoutePrivate from './routes/RoutePrivate';
import Background from './components/Background';
import AppRouters from './routes';

function App() {
  const renderRouter = () =>
    AppRouters.map((router, index) => {
      if (router.private === false) {
        return (
          <Route
            key={index.toString()}
            path={`${router.parentPath}${router.path}`}
            component={router.component}
            exact={router.exact === true}
          />
        );
      }

      return (
        <RoutePrivate
          key={index.toString()}
          path={`${router.parentPath}${router.path}`}
          component={router.component}
          exact={router.exact === true}
        />
      );
    });

  return (
    <Background>
      <Router>
        <Switch>
          {renderRouter()}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Background>
  );
}

function NotFound() {
  return <h1>Not found</h1>;
}

export default App;
