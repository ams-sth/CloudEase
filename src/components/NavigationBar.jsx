/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";

const NavigationBar = ({ pageColor, greenColor, darkColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";

  const bottomBorderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-b border-white"
      : "border-b border-gray-900";

  return (
    <nav className={`p-8 ${bottomBorderColor}`}>
      <div className="container flex justify-between">
        <div className="flex-shrink">
          <span className={`${textColorClass} font-bold text-xl`}>
            CloudEase
          </span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className={`hover:text-gray-300 ${textColorClass}`}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={`hover:text-gray-300 ${textColorClass}`}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={`hover:text-gray-300 ${textColorClass} `}>
              Service
            </a>
          </li>
          <li>
            <a href="#" className={`hover:text-gray-300 ${textColorClass}`}>
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className={`hover:text-gray-300 ${textColorClass}`}>
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

const mapStateToProps = (state) => {
  return {
    pageColor: state.theme.pageColor,
    greenColor: state.theme.greenColor,
    darkColor: state.theme.darkColor,
  };
};

export default connect(mapStateToProps)(NavigationBar);
