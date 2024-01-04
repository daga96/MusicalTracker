// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent py-4 px-6 flex items-center justify-between w-full absolute top-0 z-50">
      <div className="flex items-center w-full ">
        <span className="text-white text-2xl font-bold">MusicalTracker</span>
        <ul className="flex space-x-4 ml-auto mr-">
          <li>
            <a href="/musicals" className="text-white hover:text-yellow-500">
              Musicals
            </a>
          </li>{" "}
          <li>
            <a href="#" className="text-white hover:text-yellow-500">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
