import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TripPreview from './TripPreview';
import TripsFilter from './TripsFilter';
import TripModal from './TripModal';
import Logout from './Logout';
import PlusButton from '../../components/PlusButton';

import { tripsApi } from '../../api';
import { formatDate } from '../../utils/utils';
import { getUserId } from '../../utils/storage';
import './index.css';

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

  getTrips = async () => {
    const userId = getUserId();

    const trips = await tripsApi.fetchByUserId(userId);
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
