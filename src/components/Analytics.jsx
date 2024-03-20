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
    <div className="flex flex-col justify-center  h-screen ml-12">
      <div className="pl-12 ">
        <h1 className={`font-bold text-3xl text-center ${textColorClass}`}>
          Improve Efficiency of Resource Utilization and Unify Visibility
        </h1>
      </div>
      <div className="pl-12">
        <p className={`text-center ${textColorClass}`}>
          Eget mi proin sed libero enim sed faucibus viverrate maecenas accumsan
          lacus vel <br />
          facilisis volutpat viverra maecenas accumsan it incididunt ut labore
          et dolore mag <br /> aliqu ut enim ad minim veniam quis nostrum
          exercitationem.
        </p>
      </div>
      <div className="pl-12">
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded font-bold h-12 py-2 px-4 ml-2">
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
