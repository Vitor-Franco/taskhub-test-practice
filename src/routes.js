import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Todo from './pages/Todo';
import Home from './pages/Home';
import Login from './pages/Login';
import { getSession } from './store/Session/Session.selectors';

export default function Routes() {
  const { id: sessionId } = useSelector(
    (state) => getSession(state),
    shallowEqual
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/Login">
          {sessionId ? <Redirect to="/Todo" /> : <Login />}
        </Route>

        <Route exact path="/Todo">
          {sessionId ? <Todo /> : <Redirect to="/Login" />}
        </Route>
      </Switch>
    </Router>
  );
}
