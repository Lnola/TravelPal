import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import AuthForm from './AuthForm';

import api from '../../api/auth';
import { setCredentials } from '../../utils/storage';

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

  async handleSubmit(values, { resetForm }) {
    const userCredentials = {
      username: values.username,
      password: values.password,
    };

    try {
      const credentials = await api.login(userCredentials);
      setCredentials(credentials);
      resetForm();
      window.location.href = '/trips';
    } catch ({ response }) {
      alert(response.data.message);
    }
  },
})(Login);
