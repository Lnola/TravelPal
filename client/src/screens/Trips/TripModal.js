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
      isValidationVisible: false,
      isCalendarVisible: true,
      selectedDate: new Date(),
    };
  }

  componentDidUpdate(nextProps) {
    const { name } = nextProps.values;
    if (name !== '' && !this.state.isValidationVisible)
      this.setState({ isValidationVisible: true });
  }

  handleToggleCalendarVisibility = () => {
    const { isCalendarVisible } = this.state;
    this.setState({ isCalendarVisible: !isCalendarVisible });
  };

  handleCalendarChange = (e) => {
    this.setState({ selectedDate: e });
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
    const { isValidationVisible, isCalendarVisible, selectedDate } = this.state;

    values.selectedDate = selectedDate;

    return (
      <aside style={{ top: currentScrollPosition }}>
        <section className='modal--wrapper'>
          <Form>
            <Input
              type='text'
              name='name'
              error={errors.name}
              value={values.name}
              isValidationVisible={isValidationVisible}
            />

            <TripCalendar
              isCalendarVisible={isCalendarVisible}
              onToggleCalendarVisibility={this.handleToggleCalendarVisibility}
              selectedDate={values.selectedDate}
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
      selectedDate: [],
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().min(3).required('Cant be empty'),
    selectedDate: Yup.array().min(2).required('Cant be empty'),
  }),

  async handleSubmit(values, { props }) {
    const { tripId, toggleModal, refetch } = props;

    const tripDetails = {
      name: values.name,
      selectedDate: values.selectedDate,
      tripId,
    };

    await tripsApi[tripId ? 'edit' : 'add'](tripDetails);
    await refetch();
    toggleModal(false);
  },
})(TripModal);
