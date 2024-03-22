import React from "react";
import { connect } from "react-redux";
import { changeImage } from "../app/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const images = [
  "/images/Resource-195.png",
  "/images/Network-239753-e1686204225759.png",
  "/images/Total-238.png",
];

const Analytics = ({
  pageColor,
  darkColor,
  greenColor,
  currentImageIndex,
  changeImage,
}) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";
  const borderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-2 border-white"
      : "border-2 border-black";
  const buttonColor =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black-500";

  const handleLeftArrowClick = () => {
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    changeImage(newIndex);
  };
  const handleRightArrowClick = () => {
    const newIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    changeImage(newIndex);
  };

  return (
    <div className="container flex space-x-40 py-40">
        <div className="flex">
          <button className="arrow-btn" onClick={handleLeftArrowClick}>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              className={`${buttonColor}`}
            />
          </button>
          <img
            className="object-contain"
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
          />
          <button className="arrow-btn" onClick={handleRightArrowClick}>
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              className={`${buttonColor}`}
            />
          </button>
        </div>

      <div className="">
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
    currentImageIndex: state.currentImageIndex,
  };
};

const mapDispatchToProps = {
  changeImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
