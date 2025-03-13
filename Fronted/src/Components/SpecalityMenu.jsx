import React from "react";
import { specialityData } from "../assets/assets/assets";
import { Link } from "react-router-dom";

const SpecalityMenu = () => {
  return (
    <div 
    className="flex flex-col items-center justify-center py-16 text-gray-800 gap-4" 
    id="specality">
        <h1 className="text-3xl font-semibold">Find by Speciality</h1>
        <p className="sm:w-1/3 text-center text-md">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      <div 
       className="flex justify-center items-center gap-4 mt-5 w-full overflow-scroll pt-4">
      {
        specialityData.map((item, index) => (
        
            <Link onClick={() => window.scrollTo(0, 0)} className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`}>
              <img className="w-20 h-20 rounded-full" src={item.image} alt="speciality" />
              <p className="text-sm font-semibold">{item.speciality}</p>
            </Link>
      
        ))
      }
      </div>
    </div>
  );
};

export default SpecalityMenu;
