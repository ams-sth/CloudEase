import React from "react";
import { connect } from "react-redux";
const Features = ({ pageColor, greenColor, darkColor }) => {
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

  let hoverColor;
  if (pageColor === greenColor) {
    hoverColor = "hover:bg-[#144647]";
  } else if (pageColor === darkColor) {
    hoverColor = "hover:bg-[#2C3842]";
  } else {
    hoverColor = "hover:bg-gray-300";
  }

  return (
    <div className="container ">
      <h1
        className={`text-5xl text-center font-semibold mb-4 content-center ${headingColor}`}
      >
        Provide Tools and Expertise to Effectively Manage Cloud Environments
      </h1>

      <div className="flex justify-center py-5">
        <p className={`max-w-2xl text-center ${textColorClass}`}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto.
        </p>
      </div>

      <nav className="col-span-3 md:col-span-2">
        <ul className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-400">
          <li className={`relative px-8 py-10 ${hoverColor}`}>
            <div className="w-24">
              <img src="/images/Investment.png" />
            </div>
            <div className="mt-4">
              <a href="#" className={`text-xl font-semibold ${headingColor}`}>
                Cost Optimization
              </a>
            </div>

            <p className={`text-md max-w-xs mt-4 ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur
            </p>
            <div className="absolute top-0 right-0 h-full border-r border-gray-400"></div>
          </li>
          <li className={`relative px-8 py-10 ${hoverColor}`}>
            <div className="w-24">
              <img src="/images/Protection.png" />
            </div>
            <div className="mt-4 justify-center">
              <a href="#" className={`text-xl font-semibold ${headingColor} `}>
                Enhanced Security
              </a>
            </div>

            <p className={`text-md max-w-xs mt-4 ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur
            </p>
            <div className="absolute top-0 right-0 h-full border-r border-gray-400"></div>
          </li>
          <li className={`relative px-8 py-10 ${hoverColor}`}>
            <div className="w-24">
              <img src="/images/Encription.png" />
            </div>
            <div className="mt-4">
              <a href="#" className={`text-xl font-semibold ${headingColor} `}>
                Streamlined Operations
              </a>
            </div>

            <p className={`text-md max-w-xs mt-4 ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur
            </p>
          </li>
        </ul>
      </nav>
      <nav className="col-span-3 md:col-span-2 ">
        <ul className="grid grid-cols-1 md:grid-cols-3">
          <li className={`relative px-8 py-10 ${hoverColor}`}>
            <div className="w-24">
              <img src="/images/Velocity.png" />
            </div>
            <div className="mt-4">
              <a href="#" className={`text-xl font-semibold ${headingColor} `}>
                Performance and Reliability
              </a>
            </div>

            <p className={`text-md max-w-xs mt-4 ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur
            </p>
            <div className="absolute top-0 right-0 h-full border-r border-gray-400"></div>
          </li>
          <li className={`relative px-8 py-10 ${hoverColor}`}>
            <div className="w-24">
              <img src="/images/Big-Data.png" />
            </div>
            <div className="mt-4">
              <a href="#" className={`text-xl font-semibold ${headingColor} `}>
                Scalability and Flexibility
              </a>
            </div>

            <p className={`text-md max-w-xs mt-4 ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur
            </p>
            <div className="absolute top-0 right-0 h-full border-r border-gray-400"></div>
          </li>
          <li className={`relative px-8 py-10 ${hoverColor}`}>
            <div className="w-24">
              <img src="/images/Mantenance-Data-Cloud-Server.png" />
            </div>
            <div className="mt-4">
              <a href="#" className={`text-xl font-semibold ${headingColor} `}>
                Monitoring and Support
              </a>
            </div>

            <p className={`text-md max-w-xs mt-4 ${textColorClass}`}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur
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
