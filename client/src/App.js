import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from './screens/Auth';

import './components/Common.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/auth' component={Auth} />
        {/* <PrivateRoute exact path='/trips' component={Trips} />
        <PrivateRoute exact path='/trips/details' component={TripDetails} />
        <PrivateRoute exact path='/locations' component={Locations} />
        <PrivateRoute
          exact
          path='/locations/details'
          component={LocationDetails}
        /> */}
        <Redirect exact to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
