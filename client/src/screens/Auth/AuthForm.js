import React, { Component } from 'react';
import { Form } from 'formik';

import Input from '../../components/Input';
import Button from '../../components/Button';

import ButtonVariants from '../../components/Button/variants';
import Logo from '../../assets/Logo.png';
import './index.css';

class AuthForm extends Component {
  render() {
    const { inputs, submitLabel, disabled, handleSubmit, cta } = this.props;

    if (!inputs) return null;
    return (
      <main className='auth__form'>
        <Form className='auth__form--form'>
          <img className='auth__form--logo' src={Logo} alt='logo' />

          {inputs.map(({ name, type, value, error }) => (
            <Input
              key={name}
              type={type}
              name={name}
              value={value}
              error={error}
            />
          ))}
          <Button
            type='submit'
            disabled={disabled}
            onClick={handleSubmit}
            label={submitLabel}
          />

          <div className='input__wrapper'>
            <p className='auth__form--text'>{cta.text}</p>
            <Button
              variant={ButtonVariants.text}
              onClick={cta.onClick}
              label={cta.label}
            />
          </div>
        </Form>
      </main>
    );
  }
}

export default AuthForm;
