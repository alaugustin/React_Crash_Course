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

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({counters})
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <div className="m-2">
          <button
            onClick={this.handleReset}
            className={this.getResetButtonClasses()}
          >
            Reset
          </button>
        </div>

        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
            <h3 className={"text-lg font-bold mb-2"}>Counter #{counter.id}</h3>
          </Counter>
        ))}
      </>
    );
  }

  getResetButtonClasses() {
    let resetButtonClasses =
      "btn bg-gray-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-b-4 border-gray-400 hover:border-gray-500 rounded";
    return resetButtonClasses;
  }
}

export default Counters;
