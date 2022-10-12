import React, { Component } from 'react';

import TripsFilter from './TripsFilter';

const defaultFilterId = 1;

class TripsHeader extends Component {
  render() {
    const { filterByDate } = this.props;

    return (
      <header className='trips__header'>
        <h1>My Trips</h1>
        <TripsFilter default={defaultFilterId} filterByDate={filterByDate} />
      </header>
    );
  }
}

export default TripsHeader;
