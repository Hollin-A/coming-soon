import React from "react";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="container flex justify-between items-center mx-auto mb-3 px-4 sm:px-0">
        <p className="text-primary font-sans sm:text-lg">Privacy Policy</p>
        <div className="flex sm:h-8 h-6 space-x-2">
          <img src={facebook} className="" alt="facebook icon" />
          <img src={whatsapp} className="" alt="whatsapp icon" />
          <img src={linkedin} className="" alt="linkedin icon" />
          <img src={instagram} className="" alt="instagram icon" />
        </div>
      </div>
    </div>
  );
};
