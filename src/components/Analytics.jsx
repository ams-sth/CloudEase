import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
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

const Analytics = ({colors}) => {

  return (
    <div className="container flex gap-10 mt-40">
      <div className="flex">
        <Carousel
          prevArrow={({ handlePrev }) => (
            <IconButton
              color={colors.buttonColor}
              size="sm"
              onClick={handlePrev}
              className="!absolute top-2/4 -left-0 -translate-y-2/4"
            >
              <FontAwesomeIcon icon={faChevronCircleLeft} size="2xl" />
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              color={colors.buttonColor}
              size="sm"
              onClick={handleNext}
              className="!absolute top-2/4 right-4 -translate-y-2/4"
            >
              <FontAwesomeIcon icon={faChevronCircleRight} size="2xl" />
            </IconButton>
          )}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="object-scale-down"
                src={image}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div>
        <h1 className={`font-bold text-5xl ${colors.headingColor}`}>
          Improve Efficiency of Resource Utilization and Unify Visibility
        </h1>

        <p className={`mt-5 ${colors.textColor}`}>
          Eget mi proin sed libero enim sed faucibus viverrate maecenas accumsan
          lacus vel facilisis volutpat viverra maecenas accumsan it incididunt
          ut labore et dolore mag aliqu ut enim ad minim veniam quis nostrum
          exercitationem.
        </p>
        <button className="mt-5 rounded-lg bg-gradient-to-r from-[#417BA5] to-[#37B1B4] hover:scale-105 duration-300 text-white font-bold h-10 py-2 px-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Analytics;
