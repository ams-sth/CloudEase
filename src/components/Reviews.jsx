import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { selectReviews } from "../app/Features/reviewSlice";

const Reviews = ({ colors }) => {
  const feedbacks = useSelector(selectReviews);

  const stars = Array.from({ length: 5 }).map((_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} style={{ color: "orange" }} />
  ));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseonHover:true

  };

  return (
    <div className="container mt-40">
      <div className="flex justify-center">
        <h1 className={`text-3xl font-bold ${colors.headingColor}`}>
          Client Reviews and Feedback
        </h1>
      </div>
      <Slider  arrows={false} {...settings}>
        {feedbacks.map((reviews, index) => (
          <div key={index}>
            <div className={`${colors.hoverColor} w-[20rem] mt-10 border-2 rounded-xl p-8`}>
              <div>
                <div className="flex">
                  <div className="relative">
                    <img
                      src={reviews.image}
                      alt={reviews.name}
                      className="w-24 h-24"
                    />
                  </div>

                  <div className="translate-x-4 -translate-y-2">
                    <h1 className={`${colors.textColor}`}>
                      {reviews.name}
                    </h1>
                    <h1 className={`${colors.textColor}`}>
                      {reviews.role}
                    </h1>
                  </div>
                </div>

                <div>
                  <div className="pt-2">{stars}</div>
                  <p className={`${colors.textColor} pt-2`}>
                    {reviews.comment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
