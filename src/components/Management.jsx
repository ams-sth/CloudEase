import React from "react";
import { connect } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";

const Management = ({ pageColor, greenColor, darkColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";

  return (
    <div className="flex justify-center">
      <div>
        <h1 className={`font-bold text-3xl ${textColorClass}`}>
          Management and Operations Capabilities to Analyze Cloud Cost
        </h1>
        <p className={`${textColorClass}`}>
          Luctus ac feugiat in sed ultrices donec vitae. Velit, amet, eget leo
          non sit ipsum
          <br /> venenatis eros, mi. Tempus morbi nunc placerat risus fames ac
          integer non nam.
          <br /> Vitae, metus pharetra sit nibh donec nunc, placerat.
        </p>
        <ul>
          <li>
            <h6 className={`${textColorClass}`}>
              <FaCheckCircle className="inline-block mr-2" />
              Efficiently allocate and track cloud costs
            </h6>
            <h6 className={`${textColorClass}`}>
              <FaCheckCircle className="inline-block mr-2" />
              Real-time cost monitoring and reporting
            </h6>
          </li>
        </ul>
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
