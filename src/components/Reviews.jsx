import React from "react";
import { connect } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";

const Reviews = ({ pageColor, greenColor, darkColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";

  return (
    <div className="flex justify-center flex-col items-center">
      <div
        className={`bg-gradient-to-br from-${darkColor} to-${greenColor} dark:bg-${darkColor}`}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2
              className={`mb-4 text-4xl tracking-tight font-extrabold ${textColorClass}`}
            >
              Client Reviews and Feedback
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Choosing Cloudsion for our cloud migration was the best decision
                we made. Their team took care of every aspect, ensuring a
                seamless transition with minimal disruption.
              </p>
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current text-yellow-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 1l2.65 5.52 5.9.85-4.27 4.15 1 5.85-5.28-2.78-5.28 2.78 1-5.85L1.45 7.37l5.9-.85L10 1z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 bg-gray-300 flex items-center justify-center mr-4">
                  <span>Avatar</span>
                </div>
                <div>
                  <span className="font-semibold text-lg">Sarah Johnson</span>
                  <span className="block">IT Manager</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Cloudsion team helped us <br />
                seamlessly migrate our <br />
                infrastructure to the cloud <br />, improving scalability and{" "}
                <br /> reducing costs. Their
                <br />
                expertise and support have <br />
                been exceptional, and we
                <br /> highly recommend their cloud <br />
                solutions."
              </p>
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current text-yellow-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 1l2.65 5.52 5.9.85-4.27 4.15 1 5.85-5.28-2.78-5.28 2.78 1-5.85L1.45 7.37l5.9-.85L10 1z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 bg-gray-300 flex items-center justify-center mr-4">
                  <span>Avatar</span>
                </div>
                <div>
                  <span className="font-semibold text-lg">John Smith</span>
                  <span className="block">IT Manager</span>
                </div>
              </div>
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
