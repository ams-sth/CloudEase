/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavigationBar = ({ colors }) => {

  return (
    <nav className={`p-8 border-b-2 border-white`}>
      <div className="container flex justify-between">
        <div className="flex-shrink">
          <span className={`${colors.headingColor} font-bold text-xl`}>
            CloudEase
          </span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className={`hover:text-gray-300 ${colors.textColor}`}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={`hover:text-gray-300 ${colors.textColor}`}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={`hover:text-gray-300 ${colors.textColor} `}>
              Service
            </a>
          </li>
          <li>
            <a href="#" className={`hover:text-gray-300 ${colors.textColor}`}>
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className={`hover:text-gray-300 ${colors.textColor}`}>
              Contact
            </a>
          </li>
          <li>
            <button
              className={`bg-gradient-to-r from-[#417BA5] to-[#37B1B4] hover:scale-105 hover:shadow-lg hover:shadow-cyan-400 text-white p-2 rounded-lg -translate-y-2`}
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
