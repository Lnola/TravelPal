import React, { Component } from "react";

class TripsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColorCss: { firstButton: "", secondButton: "" }
    };
  }

  handleButtonColorCss = isFirstButton => {
    const { buttonColorCss } = this.state;
    if (isFirstButton) {
      buttonColorCss.firstButton = "bc-salmon";
      buttonColorCss.secondButton = "";
    } else {
      buttonColorCss.firstButton = "";
      buttonColorCss.secondButton = "bc-salmon";
    }

    this.setState({ buttonColorCss });
  };

  render() {
    const { buttonColorCss } = this.state;
    const { onFilterByDate } = this.props;

    return (
      <div className="trips__filter">
        <button
          className={buttonColorCss.firstButton}
          onClick={() => {
            this.handleButtonColorCss(true);
            onFilterByDate("previous");
          }}
        >
          Previous
        </button>

        <button
          className={buttonColorCss.secondButton}
          onClick={() => {
            this.handleButtonColorCss(false);
            onFilterByDate("upcoming");
          }}
        >
          Upcoming
        </button>
      </div>
    );
  }
}

export default TripsFilter;
