import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from './screens/Auth';
import Locations from './screens/Locations';
import Trips from './screens/Trips';
import PrivateRoute from './components/PrivateRoute';

import './components/Common.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/auth' component={Auth} />
        <PrivateRoute exact path='/locations' component={Locations} />
        <PrivateRoute exact path='/trips' component={Trips} />

        <Redirect exact to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
