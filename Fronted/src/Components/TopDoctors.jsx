import React from "react";
import { doctors } from "../assets/assets/assets";
import { Link, useNavigate } from "react-router-dom";

const TopDoctors = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
      <h1 className="text-3xl font-semibold">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-md">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="w-full grid grid-cols-2  lg:grid-cols-3 gap-4 mt-5 overflow-scroll pt-4">
        {doctors.map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img className="bg-[#EAEFFF]" src={item.image} alt="speciality" />
            <div className="p-4">
              <div className="flex gap-2 items-center">
                <p className="bg-green-500 rounded-full w-2 h-2"></p>
                <p className="text-sm text-green-500">Avaliable</p>
              </div>
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="text-sm font-semibold">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <Link
        onClick={() => window.scrollTo(0, 0)}
        to="/doctors"
        className="flex items-center gap-2 bg-primary px-6 md:px-8 py-3 rounded-md text-white text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
      >
        See More
      </Link>
      
    </div>
  );
};

export default TopDoctors;
