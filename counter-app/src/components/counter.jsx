import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getSpanClasses()}>{this.formatCount()}</span>
        <button className={this.getButtonClasses()}>Increment</button>
      </React.Fragment>
    );
  }

  getSpanClasses() {
    let spanClasses =
      "bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded relative";
    spanClasses =
      this.state.count === 0
        ? "bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
        : "bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded relative";
    return spanClasses;
  }

  getButtonClasses() {
    let buttonClasses = "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded";
    return buttonClasses;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero " : count;
  }
}

export default Counter;
