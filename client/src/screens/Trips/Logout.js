import React, { Component } from 'react';

import Button from '../../components/Button';
import ButtonVariants from '../../components/Button/variants';

import { authorizedRequest } from '../../utils/authorizedRequest';
import { clearLocalStorage } from '../../utils/storage';
import LogoutIcon from '../../assets/logout.svg';

class Logout extends Component {
  handleLogout = () => {
    authorizedRequest(
      `/api/auth/delete/${window.localStorage.getItem('id')}`,
      'delete'
    )
      .then(() => clearLocalStorage())
      .catch((err) => console.log('Something went wrong', err));
  };

  render() {
    return (
      <Button
        variant={ButtonVariants.icon}
        icon={LogoutIcon}
        onClick={this.handleLogout}
      />
    );
  }
}

export default Logout;
