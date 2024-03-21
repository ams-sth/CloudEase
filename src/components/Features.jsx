import React from "react";
import { connect } from "react-redux";
const Features = ({ pageColor, greenColor, darkColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";
  const borderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-2 border-white"
      : "border-2 border-black";

  return (
    <div className="container mx-auto">
      <h1 className={`text-3xl font-bold mb-4 ${textColorClass}`}>
        Provide Tools and Expertise to Effectively Manage Cloud Environments
      </h1>
      <nav className="col-span-3 md:col-span-2">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-400">
          <li className="relative hover:bg-gray-300">
            <a href="#" className={`${textColorClass} pr-4`}>
              Cost Optimization
            </a>
            <p className={`text-sm ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in <br /> voluptate velit
              esse cillum dolore eu fugiat <br />
              nulla pariatur excepteur
            </p>
            <div className="absolute top-0 right-0 h-full border-r border-gray-400"></div>
          </li>
          <li className="relative hover:bg-gray-300">
            <a href="#" className={`${textColorClass} pr-4`}>
              Enhanced Security
            </a>
            <p className={`text-sm ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in <br /> voluptate velit
              esse cillum dolore eu fugiat <br />
              nulla pariatur excepteur
            </p>
            <div className="absolute top-0 right-0 h-full border-r border-gray-400"></div>
          </li>
          <li className="relative hover:bg-gray-300">
            <a href="#" className={`${textColorClass} pr-4`}>
              Streamlined Operations
            </a>
            <p className={`text-sm ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in <br /> voluptate velit
              esse cillum dolore eu fugiat <br />
              nulla pariatur excepteur
            </p>
          </li>
        </ul>
      </nav>
      <nav className="col-span-3 md:col-span-2">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="relative hover:bg-gray-300">
            <a href="#" className={`${textColorClass} pr-4`}>
              Performance and Reliability
            </a>
            <p className={`text-sm ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in <br /> voluptate velit
              esse cillum dolore eu fugiat <br />
              nulla pariatur excepteur
            </p>
            <div className="absolute top-0 right-0 h-full border-r border-gray-400"></div>
          </li>
          <li className="relative hover:bg-gray-300">
            <a href="#" className={`${textColorClass} pr-4`}>
              Scalability and Flexibility
            </a>
            <p className={`text-sm ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in <br /> voluptate velit
              esse cillum dolore eu fugiat <br />
              nulla pariatur excepteur
            </p>
            <div className="absolute top-0 right-0 h-full border-r border-gray-400"></div>
          </li>
          <li className="hover:bg-gray-300">
            <a href="#" className={`${textColorClass} pr-4`}>
              Monitoring and Support
            </a>
            <p className={`text-sm ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in <br /> voluptate velit
              esse cillum dolore eu fugiat <br />
              nulla pariatur excepteur
            </p>
          </li>
        </ul>
      </nav>
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

export default connect(mapStateToProps)(Features);
