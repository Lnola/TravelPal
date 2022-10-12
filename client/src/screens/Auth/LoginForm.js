import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { authorizedRequest, setTokens } from '../../utils/utils_api';

import AuthForm from './AuthForm';

class Login extends Component {
  render() {
    const { values, handleSubmit, errors, isSubmitting, swapForm } = this.props;

    const inputs = [
      {
        name: 'username',
        type: 'text',
        value: values.username,
        error: errors.username,
      },
      {
        name: 'password',
        type: 'password',
        value: values.password,
        error: errors.password,
      },
    ];
    const submitLabel = 'Login';
    const cta = {
      text: "Don't have an account?",
      label: 'Register here',
      onClick: swapForm,
    };

    return (
      <AuthForm
        inputs={inputs}
        submitLabel={submitLabel}
        handleSubmit={handleSubmit}
        disabled={isSubmitting}
        cta={cta}
      />
    );
  }
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().min(4).required('Cannot be empty'),
    password: Yup.string().min(4).required('Cannot be empty'),
  }),

  handleSubmit(values, { resetForm, props }) {
    const userCredentials = {
      username: values.username,
      password: values.password,
    };

    resetForm();

    authorizedRequest('/api/auth/login', 'post', { userCredentials }).then(
      (tokens) => {
        if (tokens !== undefined) {
          setTokens(tokens.accessToken, tokens.refreshToken);
          window.localStorage.setItem('id', tokens.userId);
          window.localStorage.setItem('username', userCredentials.username);

          props.history.push('/trips');
        } else alert("Username and password don't match");
      }
    );
  },
})(Login);
