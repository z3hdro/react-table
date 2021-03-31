import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch, useParams,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import { ParamTypes } from './types/AppTypes';

function MoreInfo() {
  const { id } = useParams<ParamTypes>();
  return (<UserScreen id={id} />);
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/users/:id" component={MoreInfo} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
