import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './LocationDetails.css';
import FavoritesButton from '../../components/FavoritesButton/FavoritesButton';
import PlusButton from '../../components/PlusButton/PlusButtton';
import LocationModal from '../Locations/LocationModal';
import { formatMarker } from '../../utils/utils';
import ImageMissing from '../../assets/RandomImg.png';
import { authorizedRequest } from '../../utils/utils_api';

class LocationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      favoritesButtonColor: '',
      isShorterDescriptionVisible: true,
    };
  }

  componentDidMount() {
    this.getFavoriteStatus();
  }

  handleGoToPreviousPage = () => {
    this.props.history.goBack();
  };

  handleToggleModal = (visibleType) => {
    const { isModalVisible } = this.state;
    if (isModalVisible === !visibleType) {
      if (visibleType) {
        document.getElementsByTagName('body')[0].classList.add('o-hidden');
        this.setState({ currentScrollPosition: window.scrollY });
      } else
        document.getElementsByTagName('body')[0].classList.remove('o-hidden');

      this.setState({ isModalVisible: !isModalVisible });
    }
  };

  handleHeartClick = () => {
    let { favoritesButtonColor } = this.state;
    const userId = window.localStorage.getItem('id');
    const locationId = this.props.location.state.location.id;

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

  getFavoriteStatus = () => {
    const userId = window.localStorage.getItem('id');
    const locationId = this.props.location.state.location.id;

    authorizedRequest(
      `/api/favorites/user/${userId}/location/${locationId}`,
      'get'
    ).then((response) => {
      if (response) this.setState({ favoritesButtonColor: '#f76f63' });
    });
  };

  handleToggleDescription = () => {
    const { isShorterDescriptionVisible } = this.state;
    this.setState({
      isShorterDescriptionVisible: !isShorterDescriptionVisible,
    });
  };

  render() {
    const { isAddDisabled, location } = this.props.location.state;

    const {
      favoritesButtonColor,
      isModalVisible,
      currentScrollPosition,
      isShorterDescriptionVisible,
    } = this.state;

    const displayLocation = location.result.data.places[0];

    // console.log(location);

    return (
      <React.Fragment>
        <header className='header__locations__details'>
          <div className='location__details__image--container'>
            <img
              className='location__details__image'
              src={
                location.result.data.places[0].main_media !== null
                  ? location.result.data.places[0].main_media.media[0].url
                  : ImageMissing
              }
              alt='Preview'
            />
          </div>

          <span
            className='locations__details--x'
            onClick={this.handleGoToPreviousPage}
          >
            {location.result.data.places[0].main_media !== null ? (
              <FontAwesomeIcon icon={faTimes} color='white' />
            ) : (
              <FontAwesomeIcon icon={faTimes} color='black' />
            )}
          </span>
          <FavoritesButton
            className='location__details--favorites'
            favoritesButtonColor={favoritesButtonColor}
            onHeartClick={this.handleHeartClick}
          />
        </header>
        <main className='location__details--wrapper'>
          <h2 className='location__details--title'>{displayLocation.name}</h2>
          {isShorterDescriptionVisible ? (
            <div>
              Description: {displayLocation.perex}{' '}
              <p
                onClick={this.handleToggleDescription}
                className='location__details--more'
              >
                {' '}
                See more
              </p>
            </div>
          ) : (
            <div>
              Description: {displayLocation.description.text}{' '}
              <p
                onClick={this.handleToggleDescription}
                className='location__details--more'
              >
                {' '}
                See less
              </p>
            </div>
          )}

          {displayLocation.address !== null &&
          displayLocation.address.length !== 0 ? (
            <p>Address: {displayLocation.address}</p>
          ) : null}

          {displayLocation.opening_hours !== null &&
          displayLocation.opening_hours.length !== 0 ? (
            <p>Opening Hours: {displayLocation.opening_hours}</p>
          ) : null}

          {displayLocation.email !== null &&
          displayLocation.email.length !== 0 ? (
            <p>Email: {displayLocation.email}</p>
          ) : null}

          {displayLocation.phone !== null &&
          displayLocation.phone.length !== 0 ? (
            <p>Phone: {displayLocation.phone}</p>
          ) : null}

          {displayLocation.marker !== null ? (
            <p>Marker: {formatMarker(displayLocation.marker)}</p>
          ) : null}

          {displayLocation.categories !== null &&
          displayLocation.categories.length !== 0 ? (
            <div>
              Categories:{' '}
              {displayLocation.categories.map((category, index) => (
                <p key={index} className='location__details--more'>
                  {category}
                </p>
              ))}
            </div>
          ) : null}

          {displayLocation.references !== null &&
          displayLocation.references.length !== 0 ? (
            <div>
              References:{' '}
              {displayLocation.references.map((reference, index) => (
                <a
                  key={index}
                  href={reference.url}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='location__details--link'
                >
                  {reference.title}
                </a>
              ))}
            </div>
          ) : null}

          {/* <p>References: {displayLocation.references[0]}</p> */}
        </main>

        {isAddDisabled ? (
          <nav>
            <PlusButton
              className='plus__button--trips'
              onToggleModal={this.handleToggleModal}
            />
          </nav>
        ) : null}

        {isModalVisible ? (
          <LocationModal
            style={{ top: currentScrollPosition }}
            onToggleModal={this.handleToggleModal}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default LocationDetails;
