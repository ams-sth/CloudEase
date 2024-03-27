import React, { useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { connect } from "react-redux";
import {
  updateCountTo99,
  updateCountTo95,
  updateCountTo50,
} from "../app/actions";

const Evidence = ({
  pageColor,
  darkColor,
  greenColor,
  countTo99,
  updateCountTo99,
  countTo95,
  updateCountTo95,
  countTo50,
  updateCountTo50,
}) => {
  
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

  let sectionColor;
  if (pageColor === greenColor) {
    sectionColor = "bg-[#143337]";
  } else if (pageColor === darkColor) {
    sectionColor = "bg-[#1f2937]";
  } else {
    sectionColor = "bg-gray";
  }
  const borderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-2 border-white"
      : "border-2 border-black";

  useEffect(() => {
    const interval = setInterval(() => {
      updateCountTo99();
    }, 2000 / 99);

    return () => clearInterval(interval);
  }, [updateCountTo99]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateCountTo95();
    }, 2000 / 95);
    return () => clearInterval(interval);
  }, [updateCountTo95]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateCountTo50();
    }, 2000 / 50);

    return () => clearInterval(interval);
  }, [updateCountTo50]);

  const evidenceRef = useRef(null);


  return (
    <div className="container flex mt-40 gap" ref={evidenceRef}>
      <div>
        <div className="relative -top-12 right-8">
          <img src="/images/line.png" alt="Line" className="w-[70%]" />
          <div
            className={`${sectionColor} absolute -top-24 left-28 w-48 border-2 border-black ${borderColor} py-8 px-10`}
          >
            <h1 className={`text-center text-4xl font-bold ${headingColor}`}>
              {countTo99}%
            </h1>
            <h1 className={`text-center ${textColorClass}`}>
              Uptime Guarantee
            </h1>
          </div>
        </div>
        <div
          className={`${sectionColor} absolute -translate-y-[20rem] right-[52rem]`}
        >
          <div
            className={`w-48 border-2 border-black ${borderColor} py-8 px-10`}
          >
            <h1 className={`text-center text-4xl font-bold ${headingColor}`}>
              {countTo95}%
            </h1>
            <h1 className={`text-center ${textColorClass}`}>Cost Reduction</h1>
          </div>
        </div>
        <div
          className={` ${sectionColor} absolute -translate-y-[20rem] left-[6rem]`}
        >
          <div
            className={`w-48 border-2 border-black ${borderColor} py-8 px-10`}
          >
            <h1 className={`text-center text-4xl font-bold ${headingColor}`}>
              {countTo50}%
            </h1>
            <h1 className={`text-center ${textColorClass}`}>
              Customer Satisfaction
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className={`text-3xl font-semibold ${headingColor}`}>
          Data That Speaks Our Unparalleled Performance
        </h1>
        <p className={`max-w-xl ${textColorClass}`}>
          Eget mi proin sed libero enim sed faucibus viverrate maecenas accumsan
          lacus vel facilisis volutpat viverra maecenas accumsan it incididunt
          ut labore et dolore mag aliqu ut enim ad minim veniam.
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
  );
};

const mapStateToProps = (state) => {
  return {
    pageColor: state.theme.pageColor,
    greenColor: state.theme.greenColor,
    darkColor: state.theme.darkColor,

    countTo99: state.count.countTo99,
    countTo95: state.count.countTo95,
    countTo50: state.count.countTo50,
  };
};
const mapDispatchToProps = {
  updateCountTo99,
  updateCountTo95,
  updateCountTo50,
};

export default connect(mapStateToProps, mapDispatchToProps)(Evidence);
