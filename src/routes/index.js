import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Survey from '../pages/survey';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />

    <Route path="/survey" component={Survey} />
  </Switch>
);

export default Routes;
