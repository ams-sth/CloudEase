import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Management = ({colors}) => {
  return (
    <div className="container flex gap-8 mt-40">
      <div className="max-w-xl">
        <h1 className={`font-bold text-5xl ${colors.headingColor}`}>
          Management and Operations Capabilities to Analyze Cloud Cost
        </h1>
        <p className={`mt-5 ${colors.textColor}`}>
          Luctus ac feugiat in sed ultrices donec vitae. Velit, amet, eget leo
          non sit ipsum venenatis eros, mi. Tempus morbi nunc placerat risus
          fames ac integer non nam. Vitae, metus pharetra sit nibh donec nunc,
          placerat.
        </p>
        <ul>
          <li>
            <h6 className={`mt-5 ${colors.textColor}`}>
              <FaCheckCircle className="inline-block mr-2" />
              Efficiently allocate and track cloud costs
            </h6>
            <h6 className={`mt-5 ${colors.textColor}`}>
              <FaCheckCircle className="inline-block mr-2" />
              Real-time cost monitoring and reporting
            </h6>
          </li>
        </ul>
      </div>
      <div className={`${colors.borderColor}`}>
        <img className="object-fit" src="/images/Group-1544.png" />
      </div>
    </div>
  );
};

export default Management;
