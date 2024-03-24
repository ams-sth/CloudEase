import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { connect } from "react-redux";

const Evidence = ({ pageColor, darkColor, greenColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";
  const borderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-2 border-white"
      : "border-2 border-black";

  return (
    <div className="container flex justify-between">
      <div className="relative">
        <img
          src="/images/line.png"
          className="absolute inset-0   object-cover"
          alt="Background"
        />
        <div className="flex justify-center">
          <div className={`border-2 border-black ${borderColor}`}>
            <h1 className={`text-center ${textColorClass}`}>99%</h1>
            <h1 className={`${textColorClass}`}>Uptime Guarantee</h1>
          </div>
        </div>
        <div className="flex space-x-10 py-10">
          <div className={`border-2 border-black ${borderColor}`}>
            <h1 className={`text-center ${textColorClass}`}>50%</h1>
            <h1 className={`${textColorClass}`}>Cost Reduction</h1>
          </div>
          <div className={`border-2 border-black ${borderColor}`}>
            <h1 className={`text-center ${textColorClass}`}>95%</h1>
            <h1 className={`${textColorClass}`}>Customer Satisfaction</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div>
          <h1 className={`text-3xl font-semibold ${textColorClass}`}>
            Data That Speaks Our Unparalleled Performance
          </h1>
          <p className={`max-w-xl ${textColorClass}`}>
            Eget mi proin sed libero enim sed faucibus viverrate maecenas
            accumsan lacus vel facilisis volutpat viverra maecenas accumsan it
            incididunt ut labore et dolore mag aliqu ut enim ad minim veniam.
          </p>
          <div className="flex space-x-5">
            <div>
              <ul>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Accelerated Time
                </li>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Improvement Productivity
                </li>
                <li
                  className={`flex items-center mt-4 ${textColorClass} mb-1`}
                ></li>
              </ul>
            </div>
            <div>
              <ul>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Prioritize reliability
                </li>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Significant cost savings
                </li>
              </ul>
            </div>
          </div>
        </div>
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
export default connect(mapStateToProps)(Evidence);
