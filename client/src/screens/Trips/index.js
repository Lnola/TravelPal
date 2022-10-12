import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TripPreview from './TripPreview';
import TripsFilter from './TripsFilter';
import PlusButton from '../../components/PlusButton';
import TripModal from './TripModal';
import './index.css';
import { authorizedRequest } from '../../utils/authorizedRequest';
import { formatDate } from '../../utils/utils';
import Logout from './Logout';

const defaultFilterId = 1;

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      trips: [],
      filteredTrips: [],
    };
  }

  componentDidMount() {
    this.getTrips();
  }

  getTrips = () => {
    const userId = window.localStorage.getItem('id');

    authorizedRequest(`/api/trips/${userId}`, 'get').then((trips) =>
      this.setState({ trips, filteredTrips: trips })
    );
  };

  handleFilterByDate = (type) => {
    const { trips } = this.state;
    let filteredTrips = [];

    if (type === 'previous') {
      trips.forEach((trip) => {
        if (trip.dateTo < formatDate(new Date())) filteredTrips.push(trip);
      });
    } else if (type === 'upcoming') {
      trips.forEach((trip) => {
        if (trip.dateTo > formatDate(new Date())) filteredTrips.push(trip);
      });
    }

    this.setState({ filteredTrips });
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

  render() {
    const { isModalVisible, currentScrollPosition, filteredTrips } = this.state;

    return (
      <React.Fragment>
        <header className='header__trips'>
          <h1>My Trips</h1>
          <TripsFilter
            default={defaultFilterId}
            filterByDate={this.filterByDate}
          />
        </header>
        <main>
          {filteredTrips.length === 0 ? (
            <p className='trips__message'>
              You have no trips planned. Press + button at the bottom of the
              page to add one...
            </p>
          ) : (
            filteredTrips.map((trip, index) => (
              <Link
                key={index}
                to={{
                  pathname: '/trips/details',
                  state: { trip },
                }}
              >
                <TripPreview trip={trip} />
              </Link>
            ))
          )}
        </main>

        <nav className='nav__trips'>
          <section className='nav__trips--wrapper'>
            <Logout />
            <PlusButton
              className='plus__button--trips'
              onToggleModal={this.handleToggleModal}
            />
          </section>
        </nav>

        {isModalVisible ? (
          <TripModal
            style={{ top: currentScrollPosition }}
            onToggleModal={this.handleToggleModal}
            forceUpdateTrips={this.getTrips}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Trips;
