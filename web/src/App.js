import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import RoutePublic from "./components/RoutePublic";
import RoutePrivate from "./components/RoutePrivate";
import Background from "./components/Background";
import Login from "./routes/auth/login";

function App(props) {
  const [data, setData] = useState();
  useEffect(() => {
    setData(localStorage.getItem("data"));
  }, []);

  const saveData = data => {
    setData(data);
  };

  return (
    <Background>
      <Router>
        <Switch>
          <RoutePublic
            isAuthenticated={data}
            path="/"
            exact
            component={Login}
            saveData={saveData}
          />
          <RoutePublic
            isAuthenticated={data}
            path="/test"
            component={Test}
          />
          <RoutePrivate
            isAuthenticated={data}
            path="/private"
            component={Topics}
          />
        </Switch>
      </Router>
    </Background>
  );
}

function Test() {
  return <h1>ABBABAB</h1>;
}

function Topics() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>TopicId: {topicId}</h3>
    </div>
  );
}

export default App;
