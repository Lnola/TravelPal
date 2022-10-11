import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from '@material-ui/core';
import PlusButton from '../../components/PlusButton/PlusButtton';
import './TripDetails.css';
import TripCalendar from './TripCalendar';
import TripModal from '../Trips/TripModal';
import { authorizedRequest } from '../../utils/utils_api';
import { formatDate, formatDateFromTo } from '../../utils/utils';
import ImageMissing from '../../assets/MissingImage.svg';

class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendarVisible: true,
      selectedDate: new Date(),
      isModalVisible: false,
      arrowClassName: '',
      locationsArray: [],
      filteredLocationsArray: [],
      trip: {},
      tripLocations: [],
    };
  }

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      const { id } = this.props.location.state.trip;
      this.getTrip();

      authorizedRequest(`/api/trip_locations/${id}`, 'get')
        .then((tripLocations) => {
          this.setState({ tripLocations });

          this.handleCalendarChange(this.state.selectedDate);
        })
        .catch(() => this.handleToggleCalendarVisibility());
    } else {
      this.props.history.push('/trips');
      alert('You must choose a trip first');
    }
  }

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

  handleToggleCalendarVisibility = () => {
    const { isCalendarVisible } = this.state;
    this.setState({ isCalendarVisible: !isCalendarVisible });

    if (!isCalendarVisible)
      this.setState({ arrowClassName: 'trip__details--arrow--down' });
    else this.setState({ arrowClassName: 'trip__details--arrow--right' });
  };

  handleCalendarChange = (e) => {
    let { selectedDate } = this.state;
    selectedDate = formatDate(e);
    this.setState({ selectedDate });
    this.handleToggleCalendarVisibility();

    const { tripLocations } = this.state;
    tripLocations.forEach((tripLocation) => {
      let { locationsArray } = this.state;
      locationsArray.length = 0;

      if (selectedDate === tripLocation.date)
        authorizedRequest(
          `/api/locations/${tripLocation.locationId}`,
          'get'
        ).then((location) => {
          locationsArray.push(location);
          this.setState({ locationsArray });
        });
    });
  };

  getTrip = () => {
    const { id } = this.props.location.state.trip;
    authorizedRequest(`/api/trips/trip/${id}`, 'get')
      .then((trip) => this.setState({ trip, selectedDate: trip.dateFrom }))
      .catch((err) => console.log(err));
  };

  render() {
    const {
      selectedDate,
      isCalendarVisible,
      locationsArray,
      isModalVisible,
      arrowClassName,
      currentScrollPosition,
      trip,
    } = this.state;

    return (
      <React.Fragment>
        <header className='header__trips'>
          <section className='header__trips__details'>
            <Link to='/trips'>
              <span>
                <FontAwesomeIcon icon={faTimes} color='grey' />
              </span>
            </Link>
            <h1>{trip.name}</h1>
            <p>{formatDateFromTo(trip.dateFrom, trip.dateTo)}</p>
          </section>
          <p onClick={() => this.handleToggleModal(true)}>
            <Tooltip title='Edit'>
              <IconButton>
                <FontAwesomeIcon className='header__trips--edit' icon={faPen} />
              </IconButton>
            </Tooltip>
          </p>
        </header>

        <main>
          <TripCalendar
            isCalendarVisible={isCalendarVisible}
            onToggleCalendarVisibility={this.handleToggleCalendarVisibility}
            selectedDate={selectedDate}
            onCalendarChange={this.handleCalendarChange}
            arrowClassName={arrowClassName}
            isFancyDateVisible={true}
            minDate={trip.dateFrom}
            maxDate={trip.dateTo}
          />

          <section>
            {locationsArray.map((location, index) => (
              <Link
                key={index}
                to={{
                  pathname: '/locations/details',
                  state: {
                    isAddDisabled: false,
                    location,
                  },
                }}
              >
                <figure className='trip__details__location'>
                  <span className='trip__details__location--border b-4px-salmon'>
                    <img
                      className='trip__details__location--img'
                      src={
                        location.result.data.places[0].thumbnail_url !== null
                          ? location.result.data.places[0].thumbnail_url
                          : ImageMissing
                      }
                      alt='Location'
                    />
                  </span>
                  <figcaption>{location.result.data.places[0].name}</figcaption>
                </figure>
              </Link>
            ))}
            <Link
              to={{
                pathname: '/locations',
                state: {
                  dateFrom: trip.dateFrom,
                  dateTo: trip.dateTo,
                  tripId: trip.id,
                },
              }}
            >
              <div className='trips__details--add--wrapper'>
                <PlusButton
                  className='plus__button--details'
                  onToggleModal={() => {}}
                />
                <p className='trip__details--add'>Add points of interest...</p>
              </div>
            </Link>
          </section>
        </main>

        {isModalVisible ? (
          <TripModal
            style={{ top: currentScrollPosition }}
            onToggleModal={this.handleToggleModal}
            tripId={trip.id}
            onCalendarChange={this.handleCalendarChange}
            forceUpdateTrip={this.getTrip}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default TripDetails;
