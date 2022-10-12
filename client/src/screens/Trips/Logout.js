import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { authorizedRequest } from '../../utils/authorizedRequest';
import { clearLocalStorage } from '../../utils/storage';

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
      <Link to='/'>
        <span onClick={this.handleLogout} className='logout__button'>
          <FontAwesomeIcon
            className='plus__button--icon'
            icon={faSignOutAlt}
            color='white'
          />
        </span>
      </Link>
    );
  }
}

export default Logout;
