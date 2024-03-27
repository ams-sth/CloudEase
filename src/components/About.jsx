import React from "react";
import { connect } from "react-redux";

const About = ({ pageColor, greenColor, darkColor }) => {
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

  return (
    <div className="container flex py-40">
      <div className="flex-grow">
        <h1 className={`text-3xl ${headingColor}`}>Navigation</h1>
        <ul className="">
          <li className={`${textColorClass}`}>Home</li>
          <li className={`${textColorClass}`}>About</li>
          <li className={`${textColorClass}`}>Service</li>
          <li className={`${textColorClass}`}>Pricing</li>
        </ul>
      </div>
      <div className="flex-grow">
        <h1 className={`text-3xl ${headingColor}`}>Support</h1>
        <ul>
          <li className={`${textColorClass}`}>Contact</li>
          <li className={`${textColorClass}`}>Support</li>
          <li className={`${textColorClass}`}>Privacy Policy</li>
          <li className={`${textColorClass}`}>Terms & Conditions</li>
        </ul>
      </div>
      <div className="flex-grow">
        <h1 className={`text-3xl ${headingColor}`}>Social Media</h1>
        <ul>
          <li className={`${textColorClass}`}>Twitter</li>
          <li className={`${textColorClass}`}>Facebook</li>
          <li className={`${textColorClass}`}>Instagram</li>
          <li className={`${textColorClass}`}>Linkedin</li>
        </ul>
      </div>
      <div className=" flex-grow">
        <h1 className={`text-3xl ${headingColor}`}>Contact Info</h1>
        <ul>
          <li className={`max-w-xs ${textColorClass}`}>
            Jl. Danau Tamblingan No.180, Sanur, Denpasar, Bali 80222
          </li>
          <li className={`${textColorClass}`}>support@domain.com</li>
          <li className={`${textColorClass}`}>(+977)887110622814</li>
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
export default connect(mapStateToProps)(About);
