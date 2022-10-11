import React, { Component } from 'react';

import Login from './Login';
import Register from './Register';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: true };
  }

  render() {
    const { isLogin } = this.state;
    if (isLogin) return <Login />;
    return <Register />;
  }
}

export default Auth;
