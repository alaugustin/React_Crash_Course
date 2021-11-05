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

  handleDelete = () => {
    console.log("handleDelete() called");
  };

  render() {
    return (
      <>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value}>
            <h3 className={"text-lg font-bold mb-2"}>Counter #{counter.id}</h3>
          </Counter>
        ))}
      </>
    );
  }
}

export default Counters;
