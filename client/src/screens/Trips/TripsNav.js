import React, { Component } from 'react';

import Logout from './Logout';
import PlusButton from '../../components/PlusButton';

class TripsNav extends Component {
  render() {
    const { toggleModal } = this.props;

    return (
      <nav className='trips__nav'>
        <section className='trips__nav--wrapper'>
          <Logout />
          <PlusButton
            className='plus__button--trips'
            onToggleModal={toggleModal}
          />
        </section>
      </nav>
    );
  }
}

export default TripsNav;
