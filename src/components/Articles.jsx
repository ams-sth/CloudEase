import React from "react";
import { connect } from "react-redux";

const Articles = ({ pageColor, greenColor, darkColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";

  const headingColor =
    pageColor === greenColor || pageColor === darkColor
      ? "text-[#A3EFE8]"
      : "text-black";


  return (
    <div className="container py-40">
      <div className="flex justify-center">
        <div className="text-center">
          <h1 className={`text-4xl font-semibold ${headingColor}`}>
            Take A Look At Our Articles & Resources
          </h1>
          <p className={`max-w-lg mt-5 ${textColorClass}`}>
            Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
            accusantium doloremque laudantium elit.
          </p>
        </div>
      </div>
      <div className="flex space-x-10 mt-10">
        <div>
          <img src="/images/securely-share-and-back-up-files-with-cloud-techno.jpg" />
          <h1 className={`mt-4 font-semibold ${textColorClass}`}>
            June 8, 2023
          </h1>
          <h1 className={`mt-2 font-semibold ${headingColor}`}>
            Achieving Scalability and Resilience with Cloud Management
            Strategies
          </h1>
        </div>
        <div>
          <img src="/images/engineer-working-at-server-room-utc.jpg" />
          <h1 className={`mt-4 font-semibold ${textColorClass}`}>
            June 8, 2023
          </h1>
          <h1 className={`mt-2 font-semibold ${headingColor}`}>
            The Role of Cloud Management in Driving Business Efficiency
          </h1>
        </div>
        <div>
          <img src="/images/program-code-and-online-cloud-database-on-computer-utc.jpg" />
          <h1 className={`mt-4 font-semibold ${textColorClass}`}>
            June 8, 2023
          </h1>
          <h1 className={`mt-2 font-semibold ${headingColor}`}>
            Securing Your Cloud Environment: Best Practices for Data Protection
          </h1>
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

export default connect(mapStateToProps)(Articles);
