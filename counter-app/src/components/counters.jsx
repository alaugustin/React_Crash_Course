import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 6 },
      { id: 3, value: 0 },
      { id: 4, value: 100 },
    ],
  };

  handleDelete = (counterId) => {
    const counters= this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters })
  };

  render() {
    return (
      <>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          >
            <h3 className={"text-lg font-bold mb-2"}>Counter #{counter.id}</h3>
          </Counter>
        ))}
      </>
    );
  }
}

export default Counters;
