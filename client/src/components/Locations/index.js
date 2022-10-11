import React, { Component } from 'react';
import { withFormik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Tooltip from "@material-ui/core/Tooltip";
// import { IconButton } from "@material-ui/core";
import {
  // faSearch,
  faUtensils,
  faLandmark,
  faMonument,
  faHeart,
  faBasketballBall,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import './Locations.css';
import LocationPreview from './LocationPreview';
import LocationModal from './LocationModal';
import { authorizedRequest } from '../../utils/utils_api';

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      filtersArray: [
        {
          filter: 'Restaurant',
          color: '#cf4917',
          icon: faUtensils,
          isClicked: false,
        },
        {
          filter: 'Museum',
          color: '#f9ac3d',
          icon: faLandmark,
          isClicked: false,
        },
        {
          filter: 'Landmarks',
          color: '#758c33',
          icon: faMonument,
          isClicked: false,
        },
        {
          filter: 'Sport',
          color: '#985914',
          icon: faBasketballBall,
          isClicked: false,
        },
        {
          filter: 'Favorites',
          color: '#2d758c',
          icon: faHeart,
          isClicked: false,
        },
      ],
      cityLocations: [],
      locationId: null,
    };
  }

  handleGetCityLocations = (city) => {
    authorizedRequest(
      `/api/cityLocations?city=${city.toLowerCase()}`,
      'get'
    ).then((cityLocations) => {
      this.setState({ cityLocations });
      // console.log(this.state.cityLocations);
    });
  };

  handleToggleModal = (visibleType, locationId) => {
    if (locationId !== undefined) this.setState({ locationId });

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

  handleFilterClick = (filterToEdit) => {
    const { filtersArray } = this.state;

    filtersArray.forEach((filter) => {
      if (filter === filterToEdit) filter.isClicked = !filter.isClicked;
    });

    this.setState({ filtersArray });
  };

  handleGoToPreviousPage = () => {
    this.props.history.goBack();
  };

  render() {
    const { values } = this.props;
    const {
      isModalVisible,
      // filtersArray,
      currentScrollPosition,
      cityLocations,
      locationId,
    } = this.state;

    let locations = [];
    if (cityLocations.length !== 0)
      locations = cityLocations[0].result.data.places;

    let dateFrom, dateTo, tripId;
    if (this.props.location !== undefined) {
      dateFrom = this.props.location.state.dateFrom;
      dateTo = this.props.location.state.dateTo;
      tripId = this.props.location.state.tripId;
    }

    return (
      <React.Fragment>
        <header className='header__locations--wrapper'>
          <span onClick={this.handleGoToPreviousPage}>
            <FontAwesomeIcon icon={faTimes} color='grey' />
          </span>
          <h1 className='header__locations'>Locations</h1>
        </header>
        <main>
          <Form className='locations__search--form'>
            <Input
              type='text'
              name='city'
              className='locations__search'
              value={values.city}
            />
            <button
              className='locations__search--button'
              type='submit'
              onClick={() => {
                this.handleGetCityLocations(values.city);
              }}
            ></button>
          </Form>

          <section className='locations__filters'>
            {/* {filtersArray.map((filter, index) => (
              <Tooltip key={index} title={filter.filter}>
                <IconButton onClick={() => this.handleFilterClick(filter)}>
                  {filter.isClicked ? (
                    <span
                      style={{ backgroundColor: filter.color, opacity: 0.6 }}
                      className="locations__filters--item"
                    >
                      <FontAwesomeIcon
                        icon={filter.icon}
                        className="locations__filters--icon"
                        color="white"
                      />
                    </span>
                  ) : (
                    <span
                      style={{ backgroundColor: filter.color }}
                      className="locations__filters--item"
                    >
                      <FontAwesomeIcon
                        icon={filter.icon}
                        className="locations__filters--icon"
                        color="white"
                      />
                    </span>
                  )}
                </IconButton>
              </Tooltip>
            ))} */}
          </section>

          <section>
            {cityLocations.length === 0 ? (
              <p className='locations__message'>
                No locations found. Try searching a city you want to see the
                locations of...
              </p>
            ) : (
              locations.map((location, index) => (
                <LocationPreview
                  key={index}
                  onToggleModal={this.handleToggleModal}
                  locationId={location.id}
                />
              ))
            )}
          </section>
        </main>

        {isModalVisible ? (
          <LocationModal
            style={{ top: currentScrollPosition }}
            onToggleModal={this.handleToggleModal}
            dateFrom={dateFrom}
            dateTo={dateTo}
            tripId={tripId}
            locationId={locationId}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default withFormik({
  mapPropsToValues() {
    return {
      city: '',
    };
  },

  handleSubmit() {},
})(Locations);
