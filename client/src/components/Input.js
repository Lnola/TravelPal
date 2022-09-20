import React, { Component } from "react";
import { Field } from "formik";
import { capitalizeText } from "../utils";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { props } = this;
    let { className } = props;
    className += " login__input";

    return (
      <div className="input__wrapper">
        <Field
          name={props.name}
          render={({ field }) => (
            <input
              className={className}
              {...field}
              type={props.type}
              placeholder={capitalizeText(props.name)}
            />
          )}
        />
        {props.areAllFull ? (
          <span className="input__error">{capitalizeText(props.error)}</span>
        ) : null}
      </div>
    );
  }
}

export default Input;
