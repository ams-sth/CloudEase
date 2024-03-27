import React from "react";
import { connect } from "react-redux";

const NavigationBar = ({ pageColor, greenColor, darkColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";

  const borderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-2 border-white"
      : "border-2 border-black";

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
            <a href="#" className={`hover:text-gray-300 ${textColorClass}`}>
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
            <a
              href="#"
              className={`hover:text-gray-300 ${textColorClass} ${borderColor} px-2 py-2 rounded-lg`}
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    pageColor: state.pageColor,
    greenColor: state.greenColor,
    darkColor: state.darkColor,
  };
};

export default connect(mapStateToProps)(NavigationBar);
