import React, { Component } from 'react';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: true };
  }

  swapForm = () => {
    this.setState((prev) => ({ isLogin: !prev.isLogin }));
  };

  render() {
    const { isLogin } = this.state;
    if (isLogin) return <LoginForm swapForm={this.swapForm} />;
    return <RegisterForm swapForm={this.swapForm} />;
  }
}

export default Auth;
