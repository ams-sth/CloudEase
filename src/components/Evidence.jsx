import { useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCountTo99,
  updateCountTo95,
  updateCountTo50,
} from "../app/Features/counterSlice";

const Evidence = ({colors}) => {
  const dispatch = useDispatch();

 

  const countTo99 = useSelector((state) => state.counter.countTo99);
  const countTo95 = useSelector((state) => state.counter.countTo95);
  const countTo50 = useSelector((state) => state.counter.countTo50);

  useEffect(() => {
    const interval1 = setInterval(() => {
      dispatch(updateCountTo99());
    }, 2000 / 99);

    const interval2 = setInterval(() => {
      dispatch(updateCountTo95());
    }, 2000 / 95);

    const interval3 = setInterval(() => {
      dispatch(updateCountTo50());
    }, 2000 / 50);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [dispatch]);
  const evidenceRef = useRef(null);

  return (
    <div className="container flex mt-40 gap" ref={evidenceRef}>
      <div>
        <div className="relative -top-12 right-8">
          <img src="/images/line.png" alt="Line" className="w-[70%]" />
          <div
            className={`${colors.sectionColor} absolute -top-24 left-28 w-48 border-2 border-black ${colors.borderColor} py-8 px-10`}
          >
            <h1 className={`text-center text-4xl font-bold ${colors.headingColor}`}>
              {countTo99}%
            </h1>
            <h1 className={`text-center ${colors.textColor}`}>Uptime Guarantee</h1>
          </div>
        </div>
        <div
          className={`${colors.sectionColor} absolute -translate-y-[20rem] right-[52rem]`}
        >
          <div
            className={`w-48 border-2 border-black ${colors.borderColor} py-8 px-10`}
          >
            <h1 className={`text-center text-4xl font-bold ${colors.headingColor}`}>
              {countTo95}%
            </h1>
            <h1 className={`text-center ${colors.textColor}`}>Cost Reduction</h1>
          </div>
        </div>
        <div
          className={` ${colors.sectionColor} absolute -translate-y-[20rem] left-[6rem]`}
        >
          <div
            className={`w-48 border-2 border-black ${colors.borderColor} py-8 px-10`}
          >
            <h1 className={`text-center text-4xl font-bold ${colors.headingColor}`}>
              {countTo50}%
            </h1>
            <h1 className={`text-center ${colors.textColor}`}>
              Customer Satisfaction
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className={`text-3xl font-semibold ${colors.headingColor}`}>
          Data That Speaks Our Unparalleled Performance
        </h1>
        <p className={`max-w-xl ${colors.textColor}`}>
          Eget mi proin sed libero enim sed faucibus viverrate maecenas accumsan
          lacus vel facilisis volutpat viverra maecenas accumsan it incididunt
          ut labore et dolore mag aliqu ut enim ad minim veniam.
        </p>
        <div className="flex space-x-5">
          <div>
            <ul>
              <li className={`flex items-center mt-4 ${colors.textColor} mb-1`}>
                <FaCheck className="text-green-500 mr-2" />
                Accelerated Time
              </li>
              <li className={`flex items-center mt-4 ${colors.textColor} mb-1`}>
                <FaCheck className="text-green-500 mr-2" />
                Improvement Productivity
              </li>
              <li className={`flex items-center mt-4 ${colors.textColor} mb-1`}></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className={`flex items-center mt-4 ${colors.textColor} mb-1`}>
                <FaCheck className="text-green-500 mr-2" />
                Prioritize reliability
              </li>
              <li className={`flex items-center mt-4 ${colors.textColor} mb-1`}>
                <FaCheck className="text-green-500 mr-2" />
                Significant cost savings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evidence;
