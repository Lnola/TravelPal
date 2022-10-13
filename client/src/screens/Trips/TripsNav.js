import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../components/Button';
import ButtonVariants from '../../components/Button/variants';

import { authApi } from '../../api';
import { clearLocalStorage } from '../../utils/storage';

import LogoutIcon from '../../assets/logout.svg';
import PlusIcon from '../../assets/plus.svg';

class TripsNav extends Component {
  handleLogout = async () => {
    try {
      await authApi.logout();
      clearLocalStorage();
      this.props.history.push('auth');
    } catch ({ response }) {
      alert(response.data.message);
    }
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

export default withRouter(TripsNav);
