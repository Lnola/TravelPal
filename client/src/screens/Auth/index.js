import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import { getTokens } from '../../utils/storage';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
    this.loginRef = React.createRef();
    this.registerRef = React.createRef();
  }

  componentDidMount() {
    const { access, refresh } = getTokens();
    if (access && refresh) this.props.history.push('/trips');
  }

  swapForm = () => {
    this.setState((prev) => ({ isLogin: !prev.isLogin }));
  };

  render() {
    const { isLogin } = this.state;

    return (
      <main className='auth__form'>
        <CSSTransition
          in={isLogin}
          nodeRef={this.loginRef}
          timeout={500}
          unmountOnExit
          classNames='login__node'
        >
          <section className='auth__form--section' ref={this.loginRef}>
            <LoginForm swapForm={this.swapForm} />
          </section>
        </CSSTransition>

        <CSSTransition
          in={!isLogin}
          nodeRef={this.registerRef}
          timeout={500}
          unmountOnExit
          classNames='login__node'
        >
          <section className='auth__form--section' ref={this.registerRef}>
            <RegisterForm swapForm={this.swapForm} />
          </section>
        </CSSTransition>
      </main>
    );
  }
}

export default Auth;
