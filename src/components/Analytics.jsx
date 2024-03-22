import React from "react";
import { connect, } from "react-redux";
import { changeImage } from "../app/actions";


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
    <div className="container flex space-x-10 py-40">
      <div className="flex justify-center border-2 max-w-lg">
        <button className="arrow-btn" onClick={handleLeftArrowClick}>
          {"<"}
        </button>

        <img className="object-fit"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
        />
        <button className="arrow-btn" onClick={handleRightArrowClick}>
          {">"}
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
