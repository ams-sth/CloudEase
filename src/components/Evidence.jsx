import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { connect } from "react-redux";

const Evidence = ({ pageColor, darkColor, greenColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";

  let headingColor;
  if (pageColor === greenColor) {
    headingColor = "text-[#A3EFE8]";
  } else if (pageColor === darkColor) {
    headingColor = "text-[#6CB2EB]";
  } else {
    headingColor = "text-black";
  }

  // const borderColor =
  //   pageColor === greenColor || pageColor === darkColor
  //     ? "border-2 border-white"
  //     : "border-2 border-black";

  return (
    <div className="container flex gap-16">
      {/* <div
        className="relative inset-0 bg-contain"
      >
        <img src="/images/line.png"/>

        <div className="absolute top-0 left-56 transform -translate-x-1/2">
          <div
            className={`w-48 border-2 border-black ${borderColor} py-10 px-10`}
          >
            <h1 className={`text-center text-4xl ${textColorClass}`}>99%</h1>
            <h1 className={`text-center ${textColorClass}`}>
              Uptime Guarantee
            </h1>
          </div>
        </div>
        <div className="absolute -bottom-16 transform translate-y-[50%]">
          <div
            className={`w-48 border-2 border-black ${borderColor} py-10 px-10`}
          >
            <h1 className={`text-center text-4xl ${textColorClass}`}>50%</h1>
            <h1 className={`text-center ${textColorClass}`}>Cost Reduction</h1>
          </div>
        </div>
        <div className="absolute -bottom-16 left-36 transform translate-y-[50%] translate-x-[50%]">
          <div
            className={`w-48 border-2 border-black ${borderColor} py-10 px-10`}
          >
            <h1 className={`text-center text-4xl ${textColorClass}`}>95%</h1>
            <h1 className={`text-center ${textColorClass}`}>
              Customer Satisfaction
            </h1>
          </div>
        </div>
      </div> */}

      <div className="flex justify-end">
        <div>
          <h1 className={`text-3xl font-semibold ${headingColor}`}>
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
