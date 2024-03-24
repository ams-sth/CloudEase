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
      <div className=" mt flex space-x-5 ">
        <div className="border-4 max-w-xs border-gray-400">
          <p className={`max-w-xs ${textColorClass}`}>
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
              <h1 className={`${textColorClass}`}>Sarah Johnson</h1>
              <h1 className={`${textColorClass}`}>Marketing Director</h1>
            </div>
          </div>
        </div>
        <div className="border-4 max-w-xs border-gray-400">
          <p className={`max-w-xs ${textColorClass}`}>
            "Cloudsion team helped us seamlessly migrate our infrastructure to
            the cloud, improving scalability and reducing costs. Their expertise
            and support have been exceptional, and we highly recommend their
            cloud solutions."
          </p>
          {stars}
          <div className="flex">
            <FontAwesomeIcon
              icon={faSquare}
              size="6x"
              style={{ color: "white", border: "2px solid blak" }}
            />
            <div>
              <h1 className={`${textColorClass}`}>John Smith</h1>
              <h1 className={`${textColorClass}`}>IT Manager</h1>
            </div>
          </div>
        </div>
        <div className="border-4 max-w-xs border-gray-400">
          <p className={`max-w-xs ${textColorClass}`}>
            "Cloudsion has been an invaluable partner in our digital
            transformation journey. Their managed services have ensured our
            cloud environment operates smoothly, securely, and optimally."
          </p>
          {stars}
          <div className="flex">
            <FontAwesomeIcon
              icon={faSquare}
              size="6x"
              style={{ color: "white", border: "2px solid blak" }}
            />
            <div>
              <h1 className={`${textColorClass}`}>Robert Johnson</h1>
              <h1 className={`${textColorClass}`}>IT Director</h1>
            </div>
          </div>
        </div>
        <div className="border-4 max-w-xs border-gray-400">
          <p className={`max-w-xs ${textColorClass}`}>
            "Choosing Cloudsion for our cloud migration was the best decision we
            made. Their team took care of every aspect, ensuring a seamless
            transition with minimal disruption."
          </p>
          {stars}
          <div className="flex">
            <FontAwesomeIcon
              icon={faSquare}
              size="6x"
              style={{ color: "white", border: "2px solid blak" }}
            />
            <div>
              <h1 className={`${textColorClass}`}>Emma Davis</h1>
              <h1 className={`${textColorClass}`}>Director of Operations</h1>
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
