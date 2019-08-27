import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class PlusButton extends Component {
  render() {
    let { className, onToggleModal } = this.props;
    className += " plus__button";

    return (
      <span onClick={() => onToggleModal(true)} className={className}>
        <FontAwesomeIcon
          className="plus__button--icon"
          icon={faPlus}
          color="white"
        />
      </span>
    );
  }
}

export default PlusButton;
