import React, { Component } from "react";
import { withFormik, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "@material-ui/core";
import {
  faSearch,
  faUtensils,
  faLandmark,
  faMonument,
  faHeart,
  faBasketballBall
} from "@fortawesome/free-solid-svg-icons";
import Input from "../Input";
import "./Locations.css";
import LocationPreview from "./LocationPreview";
import LocationModal from "./LocationModal";

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      filtersArray: [
        {
          filter: "Restaurant",
          color: "#cf4917",
          icon: faUtensils,
          isClicked: false
        },
        {
          filter: "Museum",
          color: "#f9ac3d",
          icon: faLandmark,
          isClicked: false
        },
        {
          filter: "Landmarks",
          color: "#758c33",
          icon: faMonument,
          isClicked: false
        },
        {
          filter: "Sport",
          color: "#985914",
          icon: faBasketballBall,
          isClicked: false
        },
        {
          filter: "Favorites",
          color: "#2d758c",
          icon: faHeart,
          isClicked: false
        }
      ]
    };
  }

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

  handleFilterClick = filterToEdit => {
    const { filtersArray } = this.state;

    filtersArray.forEach(filter => {
      if (filter === filterToEdit) filter.isClicked = !filter.isClicked;
    });

    this.setState({ filtersArray });
  };

  render() {
    const { values, handleSubmit, errors } = this.props;
    const { isModalVisible, filtersArray, currentScrollPosition } = this.state;

    return (
      <React.Fragment>
        <header>
          <h1 className="header__locations">Locations</h1>
        </header>
        <main>
          <Form className="locations__search--form">
            <Input
              type="text"
              name="city"
              className="locations__search"
              error={errors.city}
              value={values.city}
              areAllFull={false}
            />
            <button
              className="locations__search--button"
              type="submit"
              onClick={() => handleSubmit()}
            >
              <FontAwesomeIcon icon={faSearch} color="grey" />
            </button>
          </Form>

          <section className="locations__filters">
            {filtersArray.map((filter, index) => (
              <Tooltip key={index} title={filter.filter}>
                <IconButton onClick={() => this.handleFilterClick(filter)}>
                  {filter.isClicked ? (
                    <span
                      style={{ backgroundColor: filter.color, opacity: 0.6 }}
                      className="locations__filters--item"
                    >
                      <FontAwesomeIcon
                        icon={filter.icon}
                        className="locations__filters--icon"
                        color="white"
                      />
                    </span>
                  ) : (
                    <span
                      style={{ backgroundColor: filter.color }}
                      className="locations__filters--item"
                    >
                      <FontAwesomeIcon
                        icon={filter.icon}
                        className="locations__filters--icon"
                        color="white"
                      />
                    </span>
                  )}
                </IconButton>
              </Tooltip>
            ))}
          </section>

          <section>
            <LocationPreview onToggleModal={this.handleToggleModal} />
            <LocationPreview onToggleModal={this.handleToggleModal} />
            <LocationPreview onToggleModal={this.handleToggleModal} />
          </section>
        </main>

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

export default withFormik({
  mapPropsToValues() {
    return {
      city: ""
    };
  },

  handleSubmit(values, { resetForm }) {
    const city = values.city;

    resetForm();

    console.log(city);
  }
})(Locations);
