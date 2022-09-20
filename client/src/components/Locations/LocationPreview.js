import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import FavoritesButton from '../FavoritesButton';
import PlusButton from '../PlusButtton';
import { authorizedRequest } from '../../utils_api';
import { formatLocationId } from '../../utils';
import ImageMissing from '../../assets/RandomImg.png';

class LocationPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritesButtonColor: '', location: null };

    this.fetchLocationDebounced = debounce(500, this.fetchLocation);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.fetchLocationDebounced(nextProps.locationId);
  }

  fetchLocation = (locationId) => {
    this.setLocation(locationId);
  };

  setLocation = (locationId) => {
    locationId = formatLocationId(locationId);
    // console.log(locationId);

    authorizedRequest(`/api/locations/poi/${locationId}`, 'get')
      .then((location) => {
        this.setState({ location });
        this.getFavoriteStatus(location.id);
      })
      .catch((err) => console.log(err));
  };

  handleHeartClick = () => {
    let { favoritesButtonColor, location } = this.state;
    const userId = window.localStorage.getItem('id');
    const locationId = location.id;

    if (favoritesButtonColor.length === 0) {
      this.setState({ favoritesButtonColor: '#f76f63' });

      authorizedRequest('/api/favorites/add', 'post', {
        userId,
        locationId,
      }).then((response) => {
        // console.log(response);
        console.log('Added');
      });
    } else {
      this.setState({ favoritesButtonColor: '' });

      authorizedRequest(
        `/api/favorites/delete/user/${userId}/location/${locationId}`,
        'delete'
      ).then((response) => {
        // console.log(response);
        console.log('Deleted');
      });
    }
  };

  getFavoriteStatus = (locationId) => {
    const userId = window.localStorage.getItem('id');

    authorizedRequest(
      `/api/favorites/user/${userId}/location/${locationId}`,
      'get'
    ).then((response) => {
      if (response) this.setState({ favoritesButtonColor: '#f76f63' });
    });
  };

  render() {
    const { favoritesButtonColor, location } = this.state;

    if (location === null) return null;

    const displayLocation = location.result.data.places[0];

    return (
      <figure className='locations__preview'>
        <Link
          to={{
            pathname: '/locations/details',
            state: { isAddDisabled: true, location },
          }}
        >
          <img
            className='locations__preview--image'
            src={
              displayLocation.main_media !== null
                ? displayLocation.main_media.media[0].url
                : displayLocation.thumbnail_url !== null
                ? displayLocation.thumbnail_url
                : ImageMissing
            }
            alt='Location'
          />
          <figcaption className='locations__preview--title'>
            {displayLocation.name}
          </figcaption>
          <p className='locations__preview--description'>
            {displayLocation.address}
          </p>
        </Link>
        <FavoritesButton
          className='locations__favorites'
          favoritesButtonColor={favoritesButtonColor}
          onHeartClick={this.handleHeartClick}
        />
        <PlusButton
          onToggleModal={this.props.onToggleModal}
          locationId={location.id}
          className='locations__add'
        />
      </figure>
    );
  }
}

export default LocationPreview;
