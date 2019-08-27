import React, { Component } from "react";
import { Link } from "react-router-dom";
import { debounce } from "throttle-debounce";
import FavoritesButton from "../FavoritesButton";
import PlusButton from "../PlusButtton";
import { authorizedRequest } from "../../utils_api";
import { formatLocationId } from "../../utils";
import ImageMissing from "../../assets/RandomImg.png";

class LocationPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritesButtonColor: "", location: null };

    this.fetchLocationDebounced = debounce(500, this.fetchLocation);
  }

  fetchLocation = locationId => {
    this.setLocation(locationId);
  };

  setLocation = locationId => {
    locationId = formatLocationId(locationId);
    // console.log(locationId);

    authorizedRequest(`/api/locations/poi/${locationId}`, "get")
      .then(location => this.setState({ location }))
      .catch(err => console.log(err));
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.fetchLocationDebounced(nextProps.locationId);
  }

  handleHeartClick = () => {
    let { favoritesButtonColor } = this.state;
    if (favoritesButtonColor.length === 0)
      this.setState({ favoritesButtonColor: "#f76f63" });
    else this.setState({ favoritesButtonColor: "" });
  };

  render() {
    const { favoritesButtonColor, location } = this.state;

    if (location === null) return null;

    const displayLocation = location.result.data.places[0];

    return (
      <figure className="locations__preview">
        <Link
          to={{
            pathname: "/locations/details",
            state: { isAddDisabled: true, location }
          }}
        >
          <img
            className="locations__preview--image"
            src={
              displayLocation.main_media !== null
                ? displayLocation.main_media.media[0].url
                : displayLocation.thumbnail_url !== null
                ? displayLocation.thumbnail_url
                : ImageMissing
            }
            alt="Location"
          />
          <figcaption className="locations__preview--title">
            {displayLocation.name}
          </figcaption>
          <p className="locations__preview--description">
            {displayLocation.address}
          </p>
        </Link>
        <FavoritesButton
          className="locations__favorites"
          favoritesButtonColor={favoritesButtonColor}
          onHeartClick={this.handleHeartClick}
        />
        <PlusButton
          onToggleModal={this.props.onToggleModal}
          className="locations__add"
        />
      </figure>
    );
  }
}

export default LocationPreview;
