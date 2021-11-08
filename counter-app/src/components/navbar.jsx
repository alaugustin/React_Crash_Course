import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
          <nav className={"container mx-auto"}>






            <span className={"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"}>{this.props.totalCounters}</span>
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
