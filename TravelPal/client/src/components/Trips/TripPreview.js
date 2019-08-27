import React, { Component } from "react";
import RandomImg from "../../assets/RandomImg.jpg";
import { formatDateFromTo } from "../../utils";

class TripPreview extends Component {
  render() {
    const { trip } = this.props;

    return (
      <section className="trips__preview">
        <div className="trips__preview--images">
          <img src={RandomImg} alt="Preview" />
          <img src={RandomImg} alt="Preview" />
          <img src={RandomImg} alt="Preview" />
          <img src={RandomImg} alt="Preview" />
        </div>
        <div className="trips__preview--description">
          <h3>{trip.name}</h3>
          <p>{formatDateFromTo(trip.dateFrom, trip.dateTo)}</p>
        </div>
      </section>
    );
  }
}

export default TripPreview;
