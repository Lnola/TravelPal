import React, { Component } from 'react';

import './index.css';

class AuthForm extends Component {
  render() {
    const {
      variant,
      type = 'button',
      disabled,
      onClick,
      label,
      icon,
    } = this.props;

    let className = 'pal__button';
    if (variant) className += ' pal__button--' + variant;

    return (
      <button
        className={className}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {label || <img className='pal__button--svg' src={icon} alt='icon' />}
      </button>
    );
  }
}

export default AuthForm;
