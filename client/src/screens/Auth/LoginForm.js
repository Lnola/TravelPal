import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import AuthForm from './AuthForm';

import api from '../../api/auth';
import { setCredentials } from '../../utils/storage';
import { loginForm } from './constants';

class Login extends Component {
  render() {
    const { values, errors, swapForm, handleSubmit, isSubmitting } = this.props;
    const { inputs, submitLabel, cta } = loginForm(values, errors, swapForm);

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

  async handleSubmit(values) {
    const userCredentials = {
      username: values.username,
      password: values.password,
    };

    try {
      const credentials = await api.login(userCredentials);
      setCredentials(credentials);
      window.location.href = '/trips';
    } catch ({ response }) {
      alert(response.data.message);
    }
  },
})(Login);
