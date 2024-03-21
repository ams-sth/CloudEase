import React from "react";
import { connect } from "react-redux";

const Analytics = ({ pageColor, darkColor, greenColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";
  const borderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-2 border-white"
      : "border-2 border-black";

  return (
    <div className="container flex justify-end py-40">
      <div className="max-w-xl ">
        <h1 className={`font-bold text-5xl  ${textColorClass}`}>
          Improve Efficiency of Resource Utilization and Unify Visibility
        </h1>

        <p className={`mt-5 ${textColorClass}`}>
          Eget mi proin sed libero enim sed faucibus viverrate maecenas accumsan
          lacus vel facilisis volutpat viverra maecenas accumsan it incididunt
          ut labore et dolore mag aliqu ut enim ad minim veniam quis nostrum
          exercitationem.
        </p>
        <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 py-2 px-4">
          Learn More
        </button>
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
export default connect(mapStateToProps)(Analytics);
