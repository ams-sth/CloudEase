import React from "react";
import { connect } from "react-redux";

const Footer = ({ pageColor, darkColor, greenColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";

  return (
    <div className=" container flex border-t-2 p-8">
      <div className="flex-grow">
        <h1 className={`${textColorClass}`}>
          Copyright © 2023 Jegtheme. All rights reserved.
        </h1>
      </div>
      <div className="flex-grow">
        <span className={`font-bold text-xl ${textColorClass}`}>CloudEase</span>
      </div>
      <div className="flex-grow">
        <h1 className={`${textColorClass}`}>
          Cloud Solution Template Kit by Jegtheme
        </h1>
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

export default connect(mapStateToProps)(Footer);
