import React, { Component } from 'react';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import TripCalendar from '../TripDetails/TripCalendar';
import { authorizedRequest } from '../../utils/utils_api';

class TripModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areAllFull: false,
      isCalendarVisible: true,
      selectedDate: new Date(),
    };
  }

  componentDidUpdate(nextProps) {
    const { name } = nextProps.values;
    if (name !== '' && !this.state.areAllFull)
      this.setState({ areAllFull: true });
  }

  handleToggleCalendarVisibility = () => {
    const { isCalendarVisible } = this.state;
    this.setState({ isCalendarVisible: !isCalendarVisible });
  };

  handleCalendarChange = (e) => {
    this.setState({ selectedDate: e });
  };

  render() {
    const { values, handleSubmit, errors, isSubmitting, onToggleModal, style } =
      this.props;
    const { areAllFull, isCalendarVisible, selectedDate } = this.state;

    values.selectedDate = selectedDate;

    return (
      <aside style={style}>
        <section className='modal--wrapper'>
          <Form>
            <Input
              type='text'
              name='name'
              error={errors.name}
              value={values.name}
              areAllFull={areAllFull}
            />

            <TripCalendar
              isCalendarVisible={isCalendarVisible}
              onToggleCalendarVisibility={this.handleToggleCalendarVisibility}
              selectedDate={values.selectedDate}
              onCalendarChange={this.handleCalendarChange}
              isSelectRange={true}
            />
            <div className='modal__buttons'>
              <button
                type='button'
                onClick={() => onToggleModal(false)}
                className='modal__button'
              >
                Close
              </button>
              <button
                type='submit'
                disabled={isSubmitting}
                onClick={() => handleSubmit()}
                className='modal__button'
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
      name: '',
      selectedDate: [],
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().min(3).required('Cant be empty'),
    selectedDate: Yup.array().min(2).required('Cant be empty'),
  }),

  handleSubmit(values, { resetForm, props }) {
    const tripDetails = {
      name: values.name,
      selectedDate: values.selectedDate,
      userId: window.localStorage.getItem('id'),
      tripId: props.tripId,
    };

    resetForm();
    props.onToggleModal(false);

    // console.log(tripDetails);

    if (props.tripId === undefined)
      authorizedRequest('/api/trips/add', 'post', tripDetails).then((res) =>
        props.forceUpdateTrips()
      );
    else {
      authorizedRequest('/api/trips/edit', 'post', tripDetails).then((res) =>
        props.forceUpdateTrip()
      );
    }
  },
})(TripModal);
