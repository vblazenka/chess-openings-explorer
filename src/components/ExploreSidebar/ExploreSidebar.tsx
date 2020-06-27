import * as React from "react";

import { ExploreSidebarCmp } from "./types";

const ExploreSidebar: ExploreSidebarCmp = (props) => {
  return (
    <div className="c-nav h-screen p-3 bg-white">
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="email"
        placeholder="Sicilian Defense"
      ></input>

      <nav className="flex flex-col">
        <div className="my-2 py-1 rounded-md hover:bg-gray-200">
          <button className="p-2 w-full font-medium text-gray-800">
            Ruy Lopez
          </button>
        </div>
        <div className="my-2 py-1 rounded-md hover:bg-gray-200">
          <button className="p-2 w-full font-medium text-gray-800">
            Queens Gambit
          </button>
        </div>
      </nav>
    </div>
  );
};

export default ExploreSidebar;
