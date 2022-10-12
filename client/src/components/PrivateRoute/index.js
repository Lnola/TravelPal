import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getTokens } from '../../utils/storage';

const tokens = getTokens();

const isLoggedIn = tokens.access !== null && tokens.refresh !== null;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
