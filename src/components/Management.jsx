import React from "react";
import { connect } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";

const Management = ({ pageColor, greenColor, darkColor }) => {
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

  const borderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border border-white"
      : "border border-black";

  const containerColor =
    pageColor === greenColor || pageColor === darkColor ? "" : "bg-blue-900";

  return (
    <div className="container flex gap-8 mt-40">
      <div className="max-w-xl">
        <h1 className={`font-bold text-5xl ${headingColor}`}>
          Management and Operations Capabilities to Analyze Cloud Cost
        </h1>
        <p className={`mt-5 ${textColorClass}`}>
          Luctus ac feugiat in sed ultrices donec vitae. Velit, amet, eget leo
          non sit ipsum venenatis eros, mi. Tempus morbi nunc placerat risus
          fames ac integer non nam. Vitae, metus pharetra sit nibh donec nunc,
          placerat.
        </p>
        <ul>
          <li>
            <h6 className={`mt-5 ${textColorClass}`}>
              <FaCheckCircle className="inline-block mr-2" />
              Efficiently allocate and track cloud costs
            </h6>
            <h6 className={`mt-5 ${textColorClass}`}>
              <FaCheckCircle className="inline-block mr-2" />
              Real-time cost monitoring and reporting
            </h6>
          </li>
        </ul>
      </div>
      <div className={`${borderColor} ${containerColor}`}>
        <img className="object-fit" src="/images/Group-1544.png" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pageColor: state.pageColor,
    darkColor: state.darkColor,
    greenColor: state.greenColor,
  };
};

export default connect(mapStateToProps)(Management);
