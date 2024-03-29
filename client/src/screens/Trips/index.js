import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TripsHeader from './TripsHeader';
import TripPreview from './TripPreview';
import TripModal from './TripModal';
import TripsNav from './TripsNav';

import { tripsApi } from '../../api';
import { formatDate } from '../../utils/utils';
import './index.css';

const defaultFilterId = 1;

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      trips: [],
      filteredTrips: [],
      currentScrollPosition: 0,
    };
  }

  componentDidMount() {
    this.getTrips();
  }

  getTrips = async () => {
    const trips = await tripsApi.fetch();
    this.setState({ trips });
    this.filterByDate(defaultFilterId);
  };

  filterByDate = (id) => {
    const { trips } = this.state;

    const filters = {
      0: () => trips.filter(({ dateTo }) => dateTo < formatDate(new Date())),
      1: () => trips.filter(({ dateTo }) => dateTo > formatDate(new Date())),
    };

    this.setState({ filteredTrips: filters[id]() });
  };

  toggleModal = () => {
    const { isModalVisible } = this.state;
    if (isModalVisible) {
      document.getElementsByTagName('body')[0].classList.add('o-hidden');
      this.setState({ currentScrollPosition: window.scrollY });
    } else {
      document.getElementsByTagName('body')[0].classList.remove('o-hidden');
    }

    this.setState({ isModalVisible: !isModalVisible });
  };

  render() {
    const { isModalVisible, currentScrollPosition, filteredTrips } = this.state;

    return (
      <React.Fragment>
        <TripsHeader filterByDate={this.filterByDate} />

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

        <TripsNav toggleModal={this.toggleModal} />

        {isModalVisible && (
          <TripModal
            currentScrollPosition={currentScrollPosition}
            toggleModal={this.toggleModal}
            refetch={this.getTrips}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Trips;
