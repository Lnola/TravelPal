import React, { Component } from 'react';

class TripsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1,
    };
  }

  handleClick = (id) => {
    const { selectedIndex } = this.state;
    if (id !== selectedIndex) {
      this.setState({ selectedIndex: id });
    }
  };

  render() {
    const { selectedIndex } = this.state;
    const buttons = [
      { id: 0, label: 'Previous' },
      { id: 1, label: 'Upcoming' },
    ];

    return (
      <section>
        {buttons.map(({ label, id }) => (
          <button
            key={id}
            className={`trips__filter--button 
            ${id === selectedIndex && 'bc-salmon'}`}
            onClick={() => this.handleClick(id)}
          >
            {label}
          </button>
        ))}
      </section>
    );
  }
}

export default TripsFilter;
