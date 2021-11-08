import React, { Component } from 'react';

class NavBar extends React.Component {
    render() {
        return (
          <nav className={"container mx-auto"}>
            <ul class="flex">
              <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="/">
                  Active
                </a>
              </li>
              <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="/">
                  Link
                </a>
              </li>
              <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="/">
                  Link
                </a>
              </li>
              <li class="mr-6">
                <a class="text-gray-400 cursor-not-allowed" href="/">
                  Disabled
                </a>
              </li>
            </ul>
          </nav>
        );
    }
}

export default NavBar;