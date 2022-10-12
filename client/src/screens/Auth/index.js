import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
    this.nodeRef = React.createRef();
    this.nodeRef2 = React.createRef();
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
          nodeRef={this.nodeRef}
          timeout={1000}
          unmountOnExit
          classNames='login__node'
        >
          <section className='auth__form--section' ref={this.nodeRef}>
            <LoginForm swapForm={this.swapForm} />
          </section>
        </CSSTransition>

        <CSSTransition
          in={!isLogin}
          nodeRef={this.nodeRef2}
          timeout={1000}
          unmountOnExit
          classNames='login__node'
        >
          <section className='auth__form--section' ref={this.nodeRef2}>
            <RegisterForm swapForm={this.swapForm} />
          </section>
        </CSSTransition>
      </main>
    );
  }
}

export default Auth;
