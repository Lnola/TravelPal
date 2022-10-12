import React, { Component } from 'react';
import MissingImage from '../../assets/RandomImg.png';
import { formatDateFromTo } from '../../utils/utils';
import { authorizedRequest } from '../../utils/authorizedRequest';

class TripPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thumbnails: [],
    };
  }

  componentDidMount() {
    authorizedRequest(
      `/api/trip_locations/images/${this.props.trip.id}`,
      'get'
    ).then((thumbnails) => {
      this.setState({ thumbnails });
    });
  }

  render() {
    const { trip } = this.props;
    const { thumbnails } = this.state;

    if (thumbnails.length === 0) return null;

    // console.log(thumbnails);

    return (
      <section className='trips__preview'>
        <div className='trips__preview--images'>
          {thumbnails
            .reverse()
            .map((thumbnail, index) =>
              index < 4 ? (
                <img
                  key={index}
                  src={thumbnail ? thumbnail : MissingImage}
                  alt='Preview'
                />
              ) : null
            )}
        </div>
        <div className='trips__preview--description'>
          <h3>{trip.name}</h3>
          <p>{formatDateFromTo(trip.dateFrom, trip.dateTo)}</p>
        </div>
      </section>
    );
  }
}

export default TripPreview;
