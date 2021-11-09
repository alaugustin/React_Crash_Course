import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <>
        <div className="my-2">
          <button
            onClick={this.props.onReset}
            className={this.getResetButtonClasses()}
          >
            Reset
          </button>
        </div>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
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
