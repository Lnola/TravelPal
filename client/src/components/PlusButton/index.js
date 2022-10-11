import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class PlusButton extends Component {
  render() {
    let { className, onToggleModal, locationId } = this.props;
    className += ' plus__button';

    return (
      <span
        onClick={() => onToggleModal(true, locationId)}
        className={className}
      >
        <FontAwesomeIcon
          className='plus__button--icon'
          icon={faPlus}
          color='white'
        />
      </span>
    );
  }
}

export default PlusButton;
