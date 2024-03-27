import React from "react";
import { connect } from "react-redux";

const Subscription = ({ pageColor, greenColor, darkColor }) => {
  let headingColor;
  if (pageColor === greenColor) {
    headingColor = "text-[#A3EFE8]";
  } else if (pageColor === darkColor) {
    headingColor = "text-[#6CB2EB]";
  } else {
    headingColor = "text-black";
  }

  return (
    <div className="container border mt-40">
      <div className="flex justify-center py-10">
        <h1
          className={`max-w-xl text-3xl font-semibold text-center ${headingColor} `}
        >
          Get Started with Our Powerful Cloud Management Service Today
        </h1>
      </div>

      <div className="flex justify-center space-x-5 py-10">
        <input
          className={`border-2 border-black w-80 px-5`}
          type="email"
          placeholder="Enter Your e-mail address"
        />
        <button className="border-2 bg-blue-500 text-white h-12 w-40">
          Subscribe
        </button>
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

export default connect(mapStateToProps)(Subscription);
