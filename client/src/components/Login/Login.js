import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input';
import './Login.css';
import { authorizedRequest, setTokens } from '../../utils/utils_api';
import Logo from '../../assets/Logo.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areAllFull: false,
    };
  }

  componentDidUpdate(nextProps) {
    const { username, password } = nextProps.values;
    if (username !== '' && password !== '' && !this.state.areAllFull)
      this.setState({ areAllFull: true });
  }

  render() {
    const { values, handleSubmit, errors, isSubmitting } = this.props;
    const { areAllFull } = this.state;

    return (
      <main className='main__login'>
        <Form className='main__login--form'>
          <img className='main__login--logo' src={Logo} alt='logo' />
          <Input
            type='text'
            name='username'
            error={errors.username}
            value={values.username}
            areAllFull={areAllFull}
          />
          <Input
            type='password'
            name='password'
            error={errors.password}
            value={values.password}
            areAllFull={areAllFull}
          />
          <button
            className='main__login--button'
            type='submit'
            disabled={isSubmitting}
            onClick={() => handleSubmit()}
          >
            Login
          </button>
          <div className='input__wrapper'>
            <p className='main__login--text'>Don't have an account?</p>
            <Link to='/register'>
              <p className='main__login--link'>Register here</p>
            </Link>
          </div>
        </Form>
      </main>
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
    username: Yup.string().min(4).required('Cant be empty'),
    password: Yup.string().min(4).required('Cant be empty'),
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
