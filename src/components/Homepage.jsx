import React, { useState, useEffect } from "react";

const Homepage = ({ colors }) => {
  const [words] = useState(["Efficiency", "Scalability", "Innovation"]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`container flex py-40`}>
      <div className="max-w-xl overflow-hidden">
        <div className="animate-scrolling-text">
          <h1
            className={`text-gradient-to- text-5xl font-bold ${colors.headingColor} `}
          >
            Elevate Your Cloud Management for Enhanced {words[currentWordIndex]}
          </h1>
        </div>

        <p className={`${colors.textColor} mt-10`}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas. Nemo enim ipsam voluptatem.
        </p>
        <div className="flex mt-10">
          <input
            className={`h-12 px-8 w-[22rem] ${colors.borderColor}`}
            type="email"
            placeholder="Enter your email address"
          />
          <button
            className={`rounded-lg bg-gradient-to-r from-[#417BA5] to-[#37B1B4] hover:scale-105 duration-300 text-white font-bold h-12 py-2 px-4 ml-2`}
          >
            Subscribe
          </button>
        </div>
        <div className="pt-40">
          <h1 className={`${colors.textColor}`}>Trusted by lots of companies: </h1>
          <nav className="py-10">
            <ul className={`flex space-x-4 ${colors.textColor}`}>
              <li
                className={`text-xl ${colors.headingColor} hover:animate-bounce`}
              >
                <a href="#" className="font-bold">
                  SkyBridge
                </a>
              </li>
              <li
                className={`text-xl ${colors.headingColor} hover:animate-bounce`}
              >
                <a href="#" className="font-bold">
                  AgileWave
                </a>
              </li>
              <li
                className={`text-xl ${colors.headingColor} hover:animate-bounce`}
              >
                <a href="#" className="font-bold">
                  FutureFlow
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <img src="/images/Image-Hero.png" />
      </div>
    </div>
  );
};

export default Homepage;
