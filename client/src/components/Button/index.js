import React, { Component } from 'react';

import './index.css';

class AuthForm extends Component {
  render() {
    const { type = 'button', disabled, onClick, label } = this.props;

    return (
      <button
        className='pal__button'
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}

export default AuthForm;
