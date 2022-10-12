const loginForm = (values, errors, swapForm) => ({
  inputs: [
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
  ],
  submitLabel: 'Login',
  cta: {
    text: "Don't have an account?",
    label: 'Register here',
    onClick: swapForm,
  },
});

const registerForm = (values, errors, swapForm) => ({
  inputs: [
    {
      name: 'name',
      type: 'text',
      value: values.name,
      error: errors.name,
    },
    {
      name: 'surname',
      type: 'text',
      value: values.surname,
      error: errors.surname,
    },
    {
      name: 'username',
      type: 'text',
      value: values.username,
      error: errors.username,
    },
    {
      name: 'email',
      type: 'mail',
      value: values.email,
      error: errors.email,
    },
    {
      name: 'password',
      type: 'password',
      value: values.password,
      error: errors.password,
    },
  ],
  submitLabel: 'Register',
  cta: {
    text: 'Already have an account?',
    label: 'Login here',
    onClick: swapForm,
  },
});

export { loginForm, registerForm };
