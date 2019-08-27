import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import TripCalendar from "../TripDetails/TripCalendar";
import { formatDate } from "../../utils";

class LocationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: [],
      hasCalendarBeenClicked: false,
      isSubmitDisabled: true
    };
  }

  handleCalendarChange = e => {
    let { selectedDate } = this.state;

    selectedDate.forEach((date, index) => {
      if (formatDate(date) === formatDate(e)) selectedDate.splice(index, 1);
    });

    selectedDate.push(e);

    this.setState({
      selectedDate,
      hasCalendarBeenClicked: true,
      isSubmitDisabled: false
    });
  };

  handleRemoveSelectedDate = date => {
    let { selectedDate, isSubmitDisabled } = this.state;

    selectedDate.forEach((someDate, index) => {
      if (someDate === date) selectedDate.splice(index, 1);
    });

    if (selectedDate.length === 0) isSubmitDisabled = true;

    this.setState({ selectedDate, isSubmitDisabled });
  };

  handleAddLocation = () => {
    console.log(this.state.selectedDate);
    this.setState({ selectedDate: [], isCalendarVisible: false });
  };

  render() {
    const {
      selectedDate,
      hasCalendarBeenClicked,
      isSubmitDisabled
    } = this.state;

    return (
      <aside style={this.props.style}>
        <section className="modal--wrapper">
          <TripCalendar
            isCalendarVisible={true}
            selectedDate={null}
            onCalendarChange={this.handleCalendarChange}
          />

          <section className="modal__dates--wrapper">
            {formatDate(new Date()) === formatDate(selectedDate[0]) &&
            !hasCalendarBeenClicked
              ? null
              : selectedDate.map((date, index) => (
                  <div key={index} className="modal__dates">
                    <p>{formatDate(date)}</p>
                    <p onClick={() => this.handleRemoveSelectedDate(date)}>
                      <FontAwesomeIcon icon={faTrashAlt} color="#f76f63" />
                    </p>
                  </div>
                ))}
          </section>

          <div className="modal__buttons modal__buttons--locations">
            <button onClick={() => this.props.onToggleModal(false)}>
              Close
            </button>

            <button
              onClick={this.handleAddLocation}
              type="submit"
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </div>
        </section>
      </aside>
    );
  }
}

export default LocationModal;
