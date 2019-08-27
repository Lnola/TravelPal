import React, { Component } from "react";
import { Link } from "react-router-dom";
import FavoritesButton from "../FavoritesButton";
import RandomImg from "../../assets/RandomImg.jpg";
import PlusButton from "../PlusButtton";

class LocationPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritesButtonColor: "" };
  }

  handleHeartClick = () => {
    let { favoritesButtonColor } = this.state;
    if (favoritesButtonColor.length === 0)
      this.setState({ favoritesButtonColor: "#f76f63" });
    else this.setState({ favoritesButtonColor: "" });
  };

  render() {
    const { favoritesButtonColor } = this.state;

    return (
      <figure className="locations__preview">
        <Link
          to={{
            pathname: "/locations/details",
            state: { isAddDisabled: true }
          }}
        >
          <img
            className="locations__preview--image"
            src={RandomImg}
            alt="Location"
          />
          <figcaption className="locations__preview--title">Title</figcaption>
          <p className="locations__preview--description">Short description</p>
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
