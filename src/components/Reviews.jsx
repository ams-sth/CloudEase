import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { faStar} from "@fortawesome/free-solid-svg-icons";

const Reviews = ({ pageColor, greenColor, darkColor }) => {
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

  let cardColor;
  if (pageColor === greenColor) {
    cardColor = "bg-[#174649]";
  } else if (pageColor === darkColor) {
    cardColor = "bg-[#36454F]";
  } else {
    cardColor = "bg-gray";
  }

  let borderColor;
  if (pageColor === greenColor) {
    borderColor = "border-[#31595B]";
  } else if (pageColor === darkColor) {
    borderColor = "border-[#36454F]";
  } else {
    borderColor = "border-black";
  }

  const stars = Array.from({ length: 5 }).map((_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} style={{ color: "orange" }} />
  ));

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="mt-40">
      <div className="flex justify-center">
        <h1 className={`text-3xl font-bold ${headingColor}`}>
          Client Reviews and Feedback
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-5 gap-5">
        {/* <Slider {...settings}> */}
        <div
          className={`mt-10 border-2 rounded-xl px-8 py-8 ${borderColor} ${cardColor}`}
        >
          <div className="flex">
            <div className="relative">
              <img src="/images/SarahJohnson.jpg" alt="SarahJohnson" className="w-24 h-24" />
            </div>

            <div className="mt-8 pl-4">
              <h1 className={`${textColorClass}`}>Sarah Johnson</h1>
              <h1 className={`${textColorClass}`}>Marketing Director</h1>
            </div>
          </div>
          {stars}
          <p className={`${textColorClass}`}>
            "CloudEase consulting services helped us strategize and implement
            the right cloud solutions, resulting in enhanced agility and
            efficiency. Their team was responsive, knowledgeable, and delivered
            beyond our expectations."
          </p>
        </div>
        <div
          className={`mt-10 border-2 rounded-xl px-8 py-8 ${borderColor} ${cardColor}`}
        >
          <div className="flex">
            <div className="relative">
              <img src="/images/JohnSmith.jpg" alt="JohnSmith" className="w-24 h-24" />
            </div>
            <div className="mt-8 pl-4">
              <h1 className={`${textColorClass}`}>John Smith</h1>
              <h1 className={`${textColorClass}`}>IT Manager</h1>
            </div>
          </div>
          {stars}
          <p className={`black ${textColorClass} `}>
            "CloudEase team helped us seamlessly migrate our infrastructure to
            the cloud, improving scalability and reducing costs. Their expertise
            and support have been exceptional, and we highly recommend their
            cloud solutions."
          </p>
        </div>
        <div
          className={`mt-10 border-2 rounded-xl px-8 py-8 ${borderColor} ${cardColor}`}
        >
          <div className="flex">
            <div className="relative">
              <img src="/images/RobertJohnson.jpg" alt="RobertJohnson" className="w-24 h-24" />
            </div>

            <div className="mt-8 pl-4">
              <h1 className={`${textColorClass}`}>Robert Johnson</h1>
              <h1 className={`${textColorClass}`}>IT Director</h1>
            </div>
          </div>
          {stars}

          <p className={`black ${textColorClass}`}>
            "CloudEase has been an invaluable partner in our digital
            transformation journey. Their managed services have ensured our
            cloud environment operates smoothly, securely, and optimally."
          </p>
        </div>
        <div
          className={`mt-10 border-2 rounded-xl px-8 py-8 ${borderColor} ${cardColor}`}
        >
          <div className="flex">
          <div className="relative">
              <img src="/images/EmmaDavis.jpg" alt="EmmaDavis" className="w-24 h-24" />
            </div>
            <div className="mt-8 pl-4">
              <h1 className={`${textColorClass}`}>Emma Davis</h1>
              <h1 className={`${textColorClass}`}>Director of Operations</h1>
            </div>
          </div>
          {stars}

          <p className={`black ${textColorClass}`}>
            "Choosing CloudEase for our cloud migration was the best decision we
            made. Their team took care of every aspect, ensuring a seamless
            transition with minimal disruption."
          </p>
        </div>
        <div
          className={`mt-10 border-2 rounded-xl px-8 py-8 ${borderColor} ${cardColor}`}
        >
          <div className="flex">
          <div className="relative">
              <img src="/images/LisaAnderson.jpg" alt="LisaAnderson" className="w-24 h-24" />
            </div>
            <div className="mt-8 pl-4">
              <h1 className={`${textColorClass}`}>Lisa Andersson</h1>
              <h1 className={`${textColorClass}`}>Operations Manager</h1>
            </div>
          </div>
          {stars}

          <p className={`black ${textColorClass}`}>
            "We couldn't be happier with the cloud deployment services by
            CloudEase. They helped us set up a robust cloud infrastructure that
            meets our growing needs."
          </p>
        </div>
        <div
          className={`mt-10 border-2 rounded-xl px-8 py-8 ${borderColor} ${cardColor}`}
        >
          <div className="flex">
          <div className="relative">
              <img src="/images/DavidWilson.jpg" alt="DavidWilson" className="w-24 h-24" />
            </div>
            <div className="mt-8 pl-4">
              <h1 className={`${textColorClass}`}>David Wilson</h1>
              <h1 className={`${textColorClass}`}>Director Operations</h1>
            </div>
          </div>
          {stars}

          <p className={`black ${textColorClass}`}>
            "CloudEase's cloud solutions have revolutionized our business
            operations. Their platform-as-a-service (PaaS) offering has enabled
            us to accelerate application development and deployment, saving us
            significant time and resources."
          </p>
        </div>
        {/* </Slider> */}
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
