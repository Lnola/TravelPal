import React, { Component } from 'react';

import Button from '../../components/Button';
import ButtonVariants from '../../components/Button/variants';

import { authorizedRequest } from '../../utils/authorizedRequest';
import { clearLocalStorage } from '../../utils/storage';

import LogoutIcon from '../../assets/logout.svg';
import PlusIcon from '../../assets/plus.svg';

class TripsNav extends Component {
  handleLogout = () => {
    authorizedRequest(
      `/api/auth/delete/${window.localStorage.getItem('id')}`,
      'delete'
    )
      .then(() => clearLocalStorage())
      .catch((err) => console.log('Something went wrong', err));
  };

  render() {
    const { toggleModal } = this.props;

    return (
      <nav className='trips__nav'>
        <section className='trips__nav--wrapper'>
          <Button
            variant={ButtonVariants.icon}
            icon={LogoutIcon}
            onClick={this.handleLogout}
          />
          <Button
            variant={ButtonVariants.icon}
            icon={PlusIcon}
            onClick={toggleModal}
          />
        </section>
      </nav>
    );
  }
}

export default TripsNav;
