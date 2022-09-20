import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class FavoritesButton extends Component {
  render() {
    let { className, onHeartClick, favoritesButtonColor } = this.props;
    className += ' favorites__button';

    return (
      <span onClick={onHeartClick} className={className}>
        <FontAwesomeIcon
          className='favorites__button--icon'
          icon={faHeart}
          color={favoritesButtonColor}
        />
      </span>
    );
  }
}

export default FavoritesButton;
