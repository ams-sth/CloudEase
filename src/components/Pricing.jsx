import { FaCheck } from "react-icons/fa";

const Pricing = ({ colors }) => {
  return (
    <div className="container flex py-40">
      <div>
        <h1 className={`font-bold text-3xl max-w-2xl ${colors.headingColor}`}>
          Choose Your Ideal Pricing Plan for Effective Cloud Management
        </h1>
        <ul className="flex space-x-10 mt-5">
          <li className={`flex items-center ${colors.textColor}`}>
            <FaCheck className="text-green-500 mr-2" />
            Switch Plans Anytime
          </li>
          <li className={`flex items-center ${colors.textColor}`}>
            <FaCheck className="text-green-500 mr-2" />
            No Credit Card Required
          </li>
          <li className={`flex items-center ${colors.textColor}`}>
            <FaCheck className="text-green-500 mr-2" />
            Cancel Anytime
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <section
            className={`rounded-md mt-10 ${colors.borderColor}  max-w-sm ${colors.sectionColor} ${colors.hoverColor}`}
          >
            <div className="p-8">
              <h1 className={`text-3xl mt-4 ${colors.textColor}`}>
                Basic Plan
              </h1>
              <div className="flex ">
                <h2 className={`text-2xl mt-4 ${colors.textColor}`}> $58.6</h2>
                <h2 className={`${colors.textColor} mt-6 ml-1`}>/month</h2>
              </div>
              <p className={` max-w-xs mt-4  ${colors.textColor}`}>
                Perfect for small businesses or those getting started with cloud
                management.
              </p>
              <hr className={`border-t mt-4 ${colors.borderColor}  `} />
              <ul>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
              </ul>
              <div className="flex mt-4 justify-center">
                <button className="py-2 px-24 bg-gradient-to-r from-[#417BA5] to-[#37B1B4] rounded-md hover:scale-105 duration-300 text-white">
                  Get Started
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <h1 className={`${colors.textColor}`}>
                  *15 Days Money-back Guarantee
                </h1>
              </div>
            </div>
          </section>
          <section
            className={`rounded-md mt-10 ${colors.borderColor}  max-w-sm ${colors.sectionColor} ${colors.hoverColor}`}
          >
            <div className="p-8">
              <h1 className={`text-3xl mt-4 ${colors.textColor}`}>Pro Plan</h1>
              <div className="flex ">
                <h2 className={`text-2xl mt-4 ${colors.textColor}`}> $74.8</h2>
                <h2 className={`${colors.textColor} mt-6 ml-1`}>/month</h2>
              </div>
              <p className={` max-w-xs mt-4  ${colors.textColor}`}>
                Designed for growing businesses that require advanced cloud
                management capabilities.
              </p>
              <hr className={`border-t mt-4 ${colors.borderColor}  `} />
              <ul>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
              </ul>
              <div className="flex mt-4 justify-center">
                <button className="py-2 px-24 bg-gradient-to-r from-[#417BA5] to-[#37B1B4] rounded-md hover:scale-105 duration-300 text-white">
                  Get Started
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <h1 className={`${colors.textColor}`}>
                  *15 Days Money-back Guarantee
                </h1>
              </div>
            </div>
          </section>
          <section
            className={`rounded-md mt-10 ${colors.borderColor} max-w-sm ${colors.sectionColor} ${colors.hoverColor} `}
          >
            <div className="p-8">
              <h1 className={`text-3xl mt-4 ${colors.textColor}`}>
                Enterprise Plan
              </h1>
              <div className="flex ">
                <h2 className={`text-2xl mt-4 ${colors.textColor}`}> $87.2</h2>
                <h2 className={`${colors.textColor} mt-6 ml-1`}>/month</h2>
              </div>
              <p className={` max-w-xs mt-4  ${colors.textColor}`}>
                Tailored for large organizations with complex cloud
                infrastructures requirements.
              </p>
              <hr className={`border-t mt-4 ${colors.borderColor}  `} />
              <ul>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Ultricies ut nibh purus
                </li>
                <li
                  className={`flex items-center mt-4 ${colors.textColor} mb-1`}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  Malesuada feugiat fringilla
                </li>
              </ul>
              <div className="flex mt-4 justify-center">
                <button className="py-2 px-24 bg-gradient-to-r from-[#417BA5] to-[#37B1B4] rounded-md hover:scale-105 duration-300 text-white">
                  Get Started
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <h1 className={`${colors.textColor}`}>
                  *15 Days Money-back Guarantee
                </h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
