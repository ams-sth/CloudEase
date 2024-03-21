import React from "react";
import { connect } from "react-redux";

const About = ({ pageColor, greenColor, darkColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";
  const borderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-2 border-white"
      : "border-2 border-black";
  const bottomBorderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-b border-white"
      : "border-b border-gray-900";

  return (
    <div className="flex pl-36">
      <div className="flex-grow">
        <h1 className={`text-3xl ${textColorClass}`}>Navigation</h1>
        <ul className="">
          <li className={`${textColorClass}`}>Home</li>
          <li className={`${textColorClass}`}>About</li>
          <li className={`${textColorClass}`}>Service</li>
          <li className={`${textColorClass}`}>Pricing</li>
        </ul>
      </div>
      <div className="flex-grow">
        <h1 className={`text-3xl ${textColorClass}`}>Support</h1>
        <ul>
          <li className={`${textColorClass}`}>Contact</li>
          <li className={`${textColorClass}`}>Support</li>
          <li className={`${textColorClass}`}>Privacy Policy</li>
          <li className={`${textColorClass}`}>Terms & Conditions</li>
        </ul>
      </div>
      <div className="flex-grow">
        <h1 className={`text-3xl ${textColorClass}`}>Social Media</h1>
        <ul>
          <li className={`${textColorClass}`}>Twitter</li>
          <li className={`${textColorClass}`}>Facebook</li>
          <li className={`${textColorClass}`}>Instagram</li>
          <li className={`${textColorClass}`}>Linkedin</li>
        </ul>
      </div>
      <div className=" flex-grow">
        <h1 className={`text-3xl ${textColorClass}`}>Contact Info</h1>
        <ul>
          <li className={`${textColorClass}`}>
            Jl. Danau Tamblingan No.180, Sanur,
            <br /> Denpasar, Bali 80222
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
