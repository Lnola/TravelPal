import React, { Component } from 'react';

class TripsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.default,
    };
  }

  handleClick = (id) => {
    const { selectedIndex } = this.state;
    if (id !== selectedIndex) {
      this.setState({ selectedIndex: id });
      this.props.filterByDate(id);
    }
  };

  render() {
    const { selectedIndex } = this.state;
    const filterOptions = [
      { id: 0, label: 'Previous' },
      { id: 1, label: 'Upcoming' },
    ];

    return (
      <section>
        {filterOptions.map(({ label, id }) => (
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
