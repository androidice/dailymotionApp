import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import DashBoard from './components/DashBoard';
import AuthHandler from './components/Auth/AuthHandler';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route component={AuthHandler}>
      <Route path="dashboard" component={DashBoard}/>
    </Route>
  </Route>
);
