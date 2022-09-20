import React, { Component } from "react";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { formatFancyDate } from "../../utils";
import "./TripDetails.css";

class TripCalendar extends Component {
  render() {
    const {
      isCalendarVisible,
      onToggleCalendarVisibility,
      onCalendarChange,
      isSelectRange,
      arrowClassName
    } = this.props;

    let { minDate, maxDate, selectedDate, isFancyDateVisible } = this.props;

    if (minDate === undefined) minDate = new Date();
    else {
      minDate = new Date(minDate);
      maxDate = new Date(maxDate);
      selectedDate = new Date(selectedDate);
    }

    return (
      <section className="trip__details">
        {isSelectRange ? null : selectedDate === null || !isFancyDateVisible ? (
          <span>
            <FontAwesomeIcon
              icon={faCalendar}
              className="trip__details--icon"
              color="grey"
            />
          </span>
        ) : (
          <div
            onClick={onToggleCalendarVisibility}
            className="trip__details__date"
          >
            <span className={arrowClassName}>
              <FontAwesomeIcon icon={faChevronRight} color="#f76f63" />
            </span>
            <h3 className="trip__details__date--month">
              {formatFancyDate(selectedDate.toString())[0]},
            </h3>
            <p className="trip__details__date--day">
              {formatFancyDate(selectedDate.toString())[1]}.{" "}
              {formatFancyDate(selectedDate.toString())[2]}
            </p>
          </div>
        )}

        {isCalendarVisible ? (
          <Calendar
            onChange={e => onCalendarChange(e)}
            value={selectedDate}
            minDate={minDate}
            maxDate={maxDate}
            minDetail={"month"}
            showNavigation={isSelectRange}
            selectRange={isSelectRange}
          />
        ) : null}
      </section>
    );
  }
}

export default TripCalendar;
