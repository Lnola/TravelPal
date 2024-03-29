import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import AuthForm from './AuthForm';

import { authApi } from '../../api';
import { setCredentials } from '../../utils/storage';
import { loginForm } from './constants';

class LoginForm extends Component {
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

export default withRouter(
  withFormik({
    mapPropsToValues() {
      return {
        username: '',
        password: '',
      };
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().min(4).required('Cannot be empty'),
      password: Yup.string().min(1).required('Cannot be empty'),
    }),

    async handleSubmit(values, { props }) {
      const userCredentials = {
        username: values.username,
        password: values.password,
      };

      try {
        const credentials = await authApi.login({ userCredentials });
        setCredentials({ ...credentials, username: values.username });
        props.history.push('/trips');
      } catch ({ response }) {
        alert(response.data.message);
      }
    },
  })(LoginForm)
);
