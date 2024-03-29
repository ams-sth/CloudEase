import React from "react";

const Footer = ({ colors }) => {
  return (
    <div className="container py-40">
      <div className="flex">
        <div className="flex-grow">
          <h1 className={`text-3xl ${colors.headingColor}`}>Navigation</h1>
          <ul className="leading-[2.5rem]">
            <li className={`${colors.textColor}`}>Home</li>
            <li className={`${colors.textColor}`}>About</li>
            <li className={`${colors.textColor}`}>Service</li>
            <li className={`${colors.textColor}`}>Pricing</li>
          </ul>
        </div>
        <div className="flex-grow">
          <h1 className={`text-3xl ${colors.headingColor}`}>Support</h1>
          <ul className="leading-[2.5rem]">
            <li className={`${colors.textColor}`}>Contact</li>
            <li className={`${colors.textColor}`}>Support</li>
            <li className={`${colors.textColor}`}>Privacy Policy</li>
            <li className={`${colors.textColor}`}>Terms & Conditions</li>
          </ul>
        </div>
        <div className="flex-grow">
          <h1 className={`text-3xl ${colors.headingColor}`}>Social Media</h1>
          <ul className="leading-[2.5rem]">
            <li className={`${colors.textColor}`}>Twitter</li>
            <li className={`${colors.textColor}`}>Facebook</li>
            <li className={`${colors.textColor}`}>Instagram</li>
            <li className={`${colors.textColor}`}>Linkedin</li>
          </ul>
        </div>
        <div className=" flex-grow">
          <h1 className={`text-3xl ${colors.headingColor}`}>Contact Info</h1>
          <ul className="leading-[2.5rem]">
            <li className={`max-w-xs ${colors.textColor}`}>
              Jl. Danau Tamblingan No.180, Sanur, Denpasar, Bali 80222
            </li>
            <li className={`${colors.textColor}`}>support@domain.com</li>
            <li className={`${colors.textColor}`}>(+977)887110622814</li>
          </ul>
        </div>
      </div>
      <div className="mt-20 border-t-2 border-white flex items-center justify-between">
        <span className={`${colors.textColor}`}>
          Copyright © 2023 Jegtheme. All rights reserved.
        </span>

        <span className={`font-bold text-xl ${colors.textColor} `}>
          CloudEase
        </span>
        <span className={`${colors.textColor}`}>
          Cloud Solution Template Kit by Jegtheme
        </span>
      </div>
    </div>
  );
};

export default Footer;
