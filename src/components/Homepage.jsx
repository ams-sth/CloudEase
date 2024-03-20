import React from "react";
import { connect } from "react-redux";

const Homepage = ({ pageColor, greenColor, darkColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";
  const borderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-2 border-white"
      : "border-2 border-black";

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen ml-12 ${textColorClass}`}
    >
      <div className={`text-center mb-8 ${textColorClass}`}>
        <h1 className={`text-3xl font-bold`}>Enhance Your Cloud Management</h1>
        <p className="mt-4">
          User-friendly application designed to simplify cloud management tasks.
          <br />
          With CloudEase, users can easily deploy, monitor, and optimize cloud
          <br />
          resources, streamlining their workflow and enhancing productivity
        </p>
      </div>
      <div className="flex justify-start items-center">
        <div className="flex">
          <input
            className={`flex-grow h-12 px-4 py-2 ${borderColor} mb-4 mr-2 ml-2`}
            type="email"
            placeholder="Enter your email address"
          />
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold h-12 py-2 px-4 ml-2 `}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div>
        <h1 className={`font-xl font-bold ${textColorClass}`}>
          Trusted by lots of companies
        </h1>
        <nav>
          <ul className={`flex space-x-4 ${textColorClass}`}>
            <li>
              <a
                href="#"
                className={`font-bold hover:text-gray-600 ${textColorClass}`}
              >
                SkyBridge
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`font-bold hover:text-gray-600 ${textColorClass}`}
              >
                AgileWave
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`font-bold hover:text-gray-600 ${textColorClass}`}
              >
                FutureFlow
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pageColor: state.pageColor,
    greenColor: state.greenColor,
    darkColor: state.darkColor,
  };
};

export default connect(mapStateToProps)(Homepage);
