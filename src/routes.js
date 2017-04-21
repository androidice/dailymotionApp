import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import DashBoard from './components/DashBoard';
import AuthHandler from './components/Auth/AuthHandler';
import Success from './components/Success';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="success(/:code)(/:scope)(/:uid)(/:sig)" component={Success}/>
    <Route component={AuthHandler}>
      <Route path="dashboard(/:access_token)" component={DashBoard}/>
    </Route>
  </Route>
);
