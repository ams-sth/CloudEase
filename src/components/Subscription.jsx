import React from "react";

const Subscription = ({ colors }) => {
  return (
    <div className="container border mt-40">
      <div className="flex justify-center py-10">
        <h1
          className={`max-w-xl text-3xl font-semibold text-center ${colors.headingColor} `}
        >
          Get Started with Our Powerful Cloud Management Service Today
        </h1>
      </div>

      <div className="flex justify-center space-x-5 py-10">
        <input
          className={`border-2 border-black w-80 px-5`}
          type="email"
          placeholder="Enter Your e-mail address"
        />
        <button className="rounded-lg bg-gradient-to-r from-[#417BA5] to-[#37B1B4] hover:scale-105 duration-300  text-white h-12 w-40">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscription;
