import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input';
import Logo from '../../assets/Logo.png';
import { authorizedRequest, setTokens } from '../../utils_api';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areAllFull: false,
    };
  }

  componentDidUpdate(nextProps) {
    const { name, surname, username, mail, password } = nextProps.values;
    if (
      name !== '' &&
      surname !== '' &&
      username !== '' &&
      mail !== '' &&
      password !== '' &&
      !this.state.areAllFull
    )
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
            name='name'
            error={errors.name}
            value={values.name}
            areAllFull={areAllFull}
          />
          <Input
            type='text'
            name='surname'
            error={errors.surname}
            value={values.surname}
            areAllFull={areAllFull}
          />
          <Input
            type='text'
            name='username'
            error={errors.username}
            value={values.username}
            areAllFull={areAllFull}
          />
          <Input
            type='mail'
            name='mail'
            error={errors.mail}
            value={values.mail}
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
            Register
          </button>

          <div className='input__wrapper'>
            <p className='main__login--text'>Go back to login?</p>
            <Link to='/'>
              <p className='main__login--link'>Click here</p>
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
      name: '',
      surname: '',
      username: '',
      mail: '',
      password: '',
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().min(2).required(),
    surname: Yup.string().min(2).required(),
    username: Yup.string().min(4).required('Cant be empty'),
    mail: Yup.string().email(),
    password: Yup.string().min(4).required('Cant be empty'),
  }),

  handleSubmit(values, { resetForm, props }) {
    const userCredentials = {
      name: values.name,
      surname: values.surname,
      username: values.username,
      mail: values.mail,
      password: values.password,
    };

    resetForm();

    // console.log(userCredentials);

    authorizedRequest('/api/auth/register', 'post', { userCredentials })
      .then((tokens) => {
        if (tokens !== undefined) {
          setTokens(tokens.accessToken, tokens.refreshToken);
          window.localStorage.setItem('id', tokens.userId);
          window.localStorage.setItem('username', userCredentials.username);

          props.history.push('/trips');
        } else alert("Username and password don't match");
      })
      .catch(() => alert('Something went wrong. Try again!'));
  },
})(Register);
