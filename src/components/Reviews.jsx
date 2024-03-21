import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { faStar, faSquare } from "@fortawesome/free-solid-svg-icons";

const Reviews = ({ pageColor, greenColor, darkColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";

  const stars = Array.from({ length: 5 }).map((_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} style={{ color: "orange" }} />
  ));

  return (
    <div>
      <div className="flex py-20 justify-center">
        <h1 className={`text-3xl font-bold ${textColorClass}`}>
          Client Reviews and Feedback
        </h1>
      </div>
      <div className="container mt flex space-x-5 ">
        <div className="border-4 max-w-xs border-gray-400">
          <p className="max-w-xs">
            "Cloudsion consulting services helped us strategize and implement
            the right cloud solutions, resulting in enhanced agility and
            efficiency. Their team was responsive, knowledgeable, and delivered
            beyond our expectations."
          </p>
          {stars}
          <div className="flex">
            <FontAwesomeIcon
              icon={faSquare}
              size="6x"
              style={{ color: "white", border: "2px solid blak" }}
            />
            <div>
              <h1>Sarah Johnson</h1>
              <h1>Marketing Director</h1>
            </div>
          </div>
        </div>
        <div className="border-4 max-w-xs border-gray-400">
          <p className="max-w-xs">
            "Cloudsion consulting services helped us strategize and implement
            the right cloud solutions, resulting in enhanced agility and
            efficiency. Their team was responsive, knowledgeable, and delivered
            beyond our expectations."
          </p>
          {stars}
          <div className="flex">
            <FontAwesomeIcon
              icon={faSquare}
              size="6x"
              style={{ color: "white", border: "2px solid blak" }}
            />
            <div>
              <h1>Sarah Johnson</h1>
              <h1>Marketing Director</h1>
            </div>
          </div>
        </div>
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
export default connect(mapStateToProps)(Reviews);
