import React, { Component } from "react";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input";
import TripCalendar from "../TripDetails/TripCalendar";

class TripModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areAllFull: false,
      isCalendarVisible: true,
      selectedDate: new Date()
    };
  }

  componentDidUpdate(nextProps) {
    const { name } = nextProps.values;
    if (name !== "" && !this.state.areAllFull)
      this.setState({ areAllFull: true });
  }

  handleToggleCalendarVisibility = () => {
    const { isCalendarVisible } = this.state;
    this.setState({ isCalendarVisible: !isCalendarVisible });
  };

  handleCalendarChange = e => {
    this.setState({ selectedDate: e });
  };

  render() {
    const { values, handleSubmit, errors, isSubmitting } = this.props;
    const { areAllFull, isCalendarVisible, selectedDate } = this.state;

    return (
      <aside>
        <section className="modal--wrapper">
          <Form>
            <Input
              type="text"
              name="name"
              error={errors.name}
              value={values.name}
              areAllFull={areAllFull}
            />

            <TripCalendar
              isCalendarVisible={isCalendarVisible}
              onToggleCalendarVisibility={this.handleToggleCalendarVisibility}
              selectedDate={selectedDate}
              onCalendarChange={this.handleCalendarChange}
              isSelectRange={true}
            />
            <div className="modal__buttons">
              <button
                type="button"
                onClick={() => this.props.onToggleModal(false)}
                className="modal__button"
              >
                Close
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => handleSubmit()}
                className="modal__button"
              >
                Submit
              </button>
            </div>
          </Form>
        </section>
      </aside>
    );
  }
}

export default withFormik({
  mapPropsToValues() {
    return {
      name: ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3)
      .required("Cant be empty")
  }),

  handleSubmit(values, { resetForm }) {
    const name = values.name;

    resetForm();

    console.log(name);
  }
})(TripModal);
