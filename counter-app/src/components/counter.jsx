import React, { Component } from "react";

class Counter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="mb-4">
          {this.props.children}
          <span className={this.getSpanClasses()}>{this.formatCount()}</span>

          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className={this.getButtonClasses()}
          >
            Increment
          </button>

          <button
            onClick={ () => this.props.onDelete(this.props.counter.id)}
            className={this.getDelButtonClasses()}
          >
            Del
          </button>
        </div>
      </React.Fragment>
    );
  }

  getSpanClasses() {
    let spanClasses =
      "bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded relative";
    spanClasses =
      this.props.counter.value === 0
        ? "bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
        : "bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded relative";
    return spanClasses;
  }

  getButtonClasses() {
    let buttonClasses =
      "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded";
    return buttonClasses;
  }

  getDelButtonClasses() {
    let delButtonClasses =
      "btn bg-red-500 hover:bg-red-400 text-white font-bold ml-2 py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded";
    return delButtonClasses;
  }

  getListClasses() {
    let listClasses = "ml-6 list-disc";
    return listClasses;
  }

  renderTags() {
    if (this.props.counter.tags.length === 0) return <p>Please create a new tag.</p>;
    return (
      <ul>
        {this.props.counter.tags.map((tag) => (
          <li className={this.getListClasses()} key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    );
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero " : count;
  }
}

export default Counter;
