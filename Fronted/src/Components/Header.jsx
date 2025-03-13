import React from "react";
import group_profiles from "../assets/assets/group_profiles.png";
import arrow_icon from "../assets/assets/arrow_icon.svg";
import header_img from "../assets/assets/header_img.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20 ">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center gap-6 md:py-[10vw]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          Book Appointments <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-24 md:w-28" src={group_profiles} alt="Profiles" />
          <p className="max-w-sm">
            Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
            Schedule your application hassle-free
          </p>
        </div>
        <a
          href="#specality"
          className="flex items-center gap-2 bg-white px-6 md:px-8 py-3 rounded-md text-gray-800 text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
        >
          Book Appointments <img className="w-3" src={arrow_icon} alt="Arrow" />
        </a>
      </div>
      
      {/* Right Side */}
      <div className="md:w-1/2  relative ">
        <img className="w-full h-auto rounded-md md:absolute bottom-0" src={header_img} alt="Header" />
      </div>
    </div>
  );
};

export default Header;