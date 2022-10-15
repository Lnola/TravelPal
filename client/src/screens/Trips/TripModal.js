import React, { Component } from 'react';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import TripCalendar from '../TripDetails/TripCalendar';

import { tripsApi } from '../../api';

class TripModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendarVisible: true,
      selectedDates: null,
    };
  }

  toggleCalendarVisibility = () => {
    this.setState(({ isCalendarVisible }) => ({
      isCalendarVisible: !isCalendarVisible,
    }));
  };

  handleCalendarChange = (selectedDates) => {
    this.setState({ selectedDates });
  };

  render() {
    const {
      values,
      handleSubmit,
      errors,
      isSubmitting,
      dirty,
      toggleModal,
      currentScrollPosition,
    } = this.props;
    const { isCalendarVisible, selectedDates } = this.state;

    values.selectedDates = selectedDates;

    return (
      <aside style={{ top: currentScrollPosition }}>
        <section className='modal--wrapper'>
          <Form>
            <Input
              type='text'
              name='name'
              error={errors.name}
              value={values.name}
              isValidationVisible={!!values.name.length}
            />

            <TripCalendar
              isCalendarVisible={isCalendarVisible}
              selectedDate={values.selectedDates}
              onCalendarChange={this.handleCalendarChange}
              isSelectRange={true}
            />
            <div className='modal__buttons'>
              <Button
                type='button'
                onClick={() => toggleModal(false)}
                label='Close'
              />
              <Button
                type='submit'
                disabled={isSubmitting || !dirty}
                onClick={() => handleSubmit()}
                label='Submit'
              />
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
      selectedDates: [],
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().min(3).required('Cant be empty'),
    selectedDates: Yup.array().min(2).required('Cant be empty'),
  }),

  async handleSubmit(values, { props }) {
    const { tripId, toggleModal, refetch } = props;

    const tripDetails = {
      name: values.name,
      selectedDates: values.selectedDates,
      tripId,
    };

    await tripsApi[tripId ? 'edit' : 'add'](tripDetails);
    await refetch();
    toggleModal(false);
  },
})(TripModal);
