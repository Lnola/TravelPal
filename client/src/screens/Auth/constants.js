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

export { loginForm };
