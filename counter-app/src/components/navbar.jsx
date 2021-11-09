import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className={"p-2 bg-gray-300 "}>
      <div className="container mx-auto flex justify-between">
        <h1 className={"font-bold text-xl"}>React Counting App</h1>

        <span
          className={
            "items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"
          }
        >
          {props.totalCounters}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
