import React from "react";
import { connect } from "react-redux";
import { FaCheck } from "react-icons/fa";

const Pricing = ({ pageColor, darkColor, greenColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";

  const headingColor =
    pageColor === greenColor || pageColor === darkColor
      ? "text-[#A3EFE8]"
      : "text-black";

  let sectionColor;
  if (pageColor === greenColor) {
    sectionColor = "bg-[#143337]";
  } else if (pageColor === darkColor) {
    sectionColor = "bg-[#1f2937]";
  } else {
    sectionColor = "bg-gray";
  }

  let hoverColor;
  if (pageColor === greenColor) {
    hoverColor = "hover:bg-[#144647]";
  } else if (pageColor === darkColor) {
    hoverColor = "hover:bg-[#2C3842]";
  } else {
    hoverColor = "hover:bg-gray-300";
  }

  const borderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-2 border-white"
      : "border-2 border-black";

  return (
    <div className="container flex py-40">
      <div>
        <h1 className={`font-bold text-3xl max-w-2xl ${headingColor}`}>
          Choose Your Ideal Pricing Plan for Effective Cloud Management
        </h1>
        <ul className="flex space-x-10 mt-5">
          <li className={`flex items-center ${textColorClass}`}>
            <FaCheck className="text-green-500 mr-2" />
            Switch Plans Anytime
          </li>
          <li className={`flex items-center ${textColorClass}`}>
            <FaCheck className="text-green-500 mr-2" />
            No Credit Card Required
          </li>
          <li className={`flex items-center ${textColorClass}`}>
            <FaCheck className="text-green-500 mr-2" />
            Cancel Anytime
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <section
            className={`rounded-md mt-10 ${borderColor}  max-w-sm ${sectionColor} ${hoverColor}`}
          >
            <div className="p-8">
              <h1 className={`text-3xl mt-4 ${textColorClass}`}>Basic Plan</h1>
              <div className="flex ">
                <h2 className={`text-2xl mt-4 ${textColorClass}`}> $58.6</h2>
                <h2 className={`${textColorClass} mt-6 ml-1`}>/month</h2>
              </div>
              <p className={` max-w-xs mt-4  ${textColorClass}`}>
                Perfect for small businesses or those getting started with cloud
                management.
              </p>
              <hr className={`border-t mt-4 ${borderColor}  `} />
              <ul>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
              </ul>
              <div className="flex mt-4 justify-center">
                <button className="py-2 px-24 bg-blue-600 rounded-md hover:scale-105 duration-300 text-white">
                  Get Started
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <h1 className={`${textColorClass}`}>
                  *15 Days Money-back Guarantee
                </h1>
              </div>
            </div>
          </section>
          <section
            className={`rounded-md mt-10 ${borderColor}  max-w-sm ${sectionColor} ${hoverColor}`}
          >
            <div className="p-8">
              <h1 className={`text-3xl mt-4 ${textColorClass}`}>Pro Plan</h1>
              <div className="flex ">
                <h2 className={`text-2xl mt-4 ${textColorClass}`}> $74.8</h2>
                <h2 className={`${textColorClass} mt-6 ml-1`}>/month</h2>
              </div>
              <p className={` max-w-xs mt-4  ${textColorClass}`}>
                Designed for growing businesses that require advanced cloud
                management capabilities.
              </p>
              <hr className={`border-t mt-4 ${borderColor}  `} />
              <ul>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
              </ul>
              <div className="flex mt-4 justify-center">
                <button className="py-2 px-24 bg-blue-600 rounded-md hover:scale-105 duration-300 text-white">
                  Get Started
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <h1 className={`${textColorClass}`}>
                  *15 Days Money-back Guarantee
                </h1>
              </div>
            </div>
          </section>
          <section
            className={`rounded-md mt-10 ${borderColor} max-w-sm ${sectionColor} ${hoverColor} `}
          >
            <div className="p-8">
              <h1 className={`text-3xl mt-4 ${textColorClass}`}>
                Enterprise Plan
              </h1>
              <div className="flex ">
                <h2 className={`text-2xl mt-4 ${textColorClass}`}> $87.2</h2>
                <h2 className={`${textColorClass} mt-6 ml-1`}>/month</h2>
              </div>
              <p className={` max-w-xs mt-4  ${textColorClass}`}>
                Tailored for large organizations with complex cloud
                infrastructures requirements.
              </p>
              <hr className={`border-t mt-4 ${borderColor}  `} />
              <ul>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li className={`flex items-center mt-4 ${textColorClass} mb-1`}>
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
              </ul>
              <div className="flex mt-4 justify-center">
                <button className="py-2 px-24 bg-blue-600 rounded-md hover:scale-105 duration-300 text-white">
                  Get Started
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <h1 className={`${textColorClass}`}>
                  *15 Days Money-back Guarantee
                </h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pageColor: state.theme.pageColor,
    darkColor: state.theme.darkColor,
    greenColor: state.theme.greenColor,
  };
};

export default connect(mapStateToProps)(Pricing);
