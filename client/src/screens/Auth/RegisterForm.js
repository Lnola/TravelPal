import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import AuthForm from './AuthForm';

import api from '../../api/auth';
import { setCredentials } from '../../utils/storage';
import { registerForm } from './constants';

class RegisterForm extends Component {
  render() {
    const { values, errors, swapForm, handleSubmit, isSubmitting } = this.props;
    const { inputs, submitLabel, cta } = registerForm(values, errors, swapForm);

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
      name: '',
      surname: '',
      username: '',
      email: '',
      password: '',
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().min(2).required(),
    surname: Yup.string().min(2).required(),
    username: Yup.string().min(4).required('Cannot be empty'),
    email: Yup.string().email(),
    password: Yup.string().min(4).required('Cannot be empty'),
  }),

  async handleSubmit(values) {
    const userCredentials = {
      name: values.name,
      surname: values.surname,
      username: values.username,
      email: values.email,
      password: values.password,
    };
  },
})(RegisterForm);
