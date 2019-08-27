import React, { Component } from "react";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areAllFull: false
    };
  }

  componentDidUpdate(nextProps) {
    const { name, surname, username, mail, password } = nextProps.values;
    if (
      name !== "" &&
      surname !== "" &&
      username !== "" &&
      mail !== "" &&
      password !== "" &&
      !this.state.areAllFull
    )
      this.setState({ areAllFull: true });
  }

  render() {
    const { values, handleSubmit, errors, isSubmitting } = this.props;
    const { areAllFull } = this.state;

    return (
      <main className="main__login">
        <Form>
          <Input
            type="text"
            name="name"
            error={errors.name}
            value={values.name}
            areAllFull={areAllFull}
          />
          <Input
            type="text"
            name="surname"
            error={errors.surname}
            value={values.surname}
            areAllFull={areAllFull}
          />
          <Input
            type="text"
            name="username"
            error={errors.username}
            value={values.username}
            areAllFull={areAllFull}
          />
          <Input
            type="mail"
            name="mail"
            error={errors.mail}
            value={values.mail}
            areAllFull={areAllFull}
          />
          <Input
            type="password"
            name="password"
            error={errors.password}
            value={values.password}
            areAllFull={areAllFull}
          />
          <button
            className="main__login--button"
            type="submit"
            disabled={isSubmitting}
            onClick={() => handleSubmit()}
          >
            Register
          </button>
        </Form>
      </main>
    );
  }
}

export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      surname: "",
      username: "",
      mail: "",
      password: ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2)
      .required(),
    surname: Yup.string()
      .min(2)
      .required(),
    username: Yup.string()
      .min(4)
      .required("Cant be empty"),
    mail: Yup.string().email(),
    password: Yup.string()
      .min(6)
      .required("Cant be empty")
  }),

  handleSubmit(values, { resetForm }) {
    const userCredentials = {
      username: values.username,
      password: values.password
    };

    resetForm();

    console.log(userCredentials);
  }
})(Register);
