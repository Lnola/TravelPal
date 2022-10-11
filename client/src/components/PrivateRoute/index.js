import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getTokens } from '../../utils/utils_api';

const tokens = getTokens();

const isLoggedIn = tokens.access !== null && tokens.refresh !== null;

export default PrivateRoute = ({ component: Component, ...rest }) => (
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
