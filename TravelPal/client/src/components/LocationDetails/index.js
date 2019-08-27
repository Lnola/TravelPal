import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./LocationDetails.css";
import FavoritesButton from "../FavoritesButton";
import PlusButton from "../PlusButtton";
import LocationModal from "../Locations/LocationModal";
import { formatMarker } from "../../utils";

class LocationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      favoritesButtonColor: "",
      isShorterDescriptionVisible: true
    };
  }

  handleGoToPreviousPage = () => {
    this.props.history.goBack();
  };

  handleToggleModal = visibleType => {
    const { isModalVisible } = this.state;
    if (isModalVisible === !visibleType) {
      if (visibleType) {
        document.getElementsByTagName("body")[0].classList.add("o-hidden");
        this.setState({ currentScrollPosition: window.scrollY });
      } else
        document.getElementsByTagName("body")[0].classList.remove("o-hidden");

      this.setState({ isModalVisible: !isModalVisible });
    }
  };

  handleHeartClick = () => {
    let { favoritesButtonColor } = this.state;
    if (favoritesButtonColor.length === 0)
      this.setState({ favoritesButtonColor: "#f76f63" });
    else this.setState({ favoritesButtonColor: "" });
  };

  handleToggleDescription = () => {
    const { isShorterDescriptionVisible } = this.state;
    this.setState({
      isShorterDescriptionVisible: !isShorterDescriptionVisible
    });
  };

  render() {
    const { isAddDisabled, location } = this.props.location.state;

    const {
      favoritesButtonColor,
      isModalVisible,
      currentScrollPosition,
      isShorterDescriptionVisible
    } = this.state;

    const displayLocation = location.result.data.places[0];

    console.log(location);

    return (
      <React.Fragment>
        <header className="header__locations__details">
          <div className="location__details__image--container">
            <img
              className="location__details__image"
              src={location.result.data.places[0].main_media.media[0].url}
              alt="Preview"
            />
          </div>

          <span
            className="locations__details--x"
            onClick={this.handleGoToPreviousPage}
          >
            <FontAwesomeIcon icon={faTimes} color="white" />
          </span>
          <FavoritesButton
            className="location__details--favorites"
            favoritesButtonColor={favoritesButtonColor}
            onHeartClick={this.handleHeartClick}
          />
        </header>
        <main className="location__details--wrapper">
          <h2 className="location__details--title">{displayLocation.name}</h2>
          {isShorterDescriptionVisible ? (
            <div>
              Description: {displayLocation.perex}{" "}
              <p
                onClick={this.handleToggleDescription}
                className="location__details--more"
              >
                {" "}
                See more
              </p>
            </div>
          ) : (
            <div>
              Description: {displayLocation.description.text}{" "}
              <p
                onClick={this.handleToggleDescription}
                className="location__details--more"
              >
                {" "}
                See less
              </p>
            </div>
          )}

          {displayLocation.address !== null &&
          displayLocation.address.length !== 0 ? (
            <p>Address: {displayLocation.address}</p>
          ) : null}

          {displayLocation.opening_hours &&
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

          <p>Marker: {formatMarker(displayLocation.marker)}</p>

          <div>
            Categories:{" "}
            {displayLocation.categories.map((category, index) => (
              <p key={index} className="location__details--more">
                {category}
              </p>
            ))}
          </div>

          <div>
            References:{" "}
            {displayLocation.references.map((reference, index) => (
              <a
                key={index}
                href={reference.url}
                rel="noopener noreferrer"
                target="_blank"
                className="location__details--link"
              >
                {reference.title}
              </a>
            ))}
          </div>

          {/* <p>References: {displayLocation.references[0]}</p> */}
        </main>
        <nav>
          {isAddDisabled ? (
            <PlusButton
              className="plus__button--trips"
              onToggleModal={this.handleToggleModal}
            />
          ) : null}
        </nav>

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
