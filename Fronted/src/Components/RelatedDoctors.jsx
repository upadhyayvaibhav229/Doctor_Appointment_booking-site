import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";

const RelatedDoctors = ({ specialization, docId, doc }) => {
  const { doctors } = useContext(AppContext);
  const [reldoc, setRelDoc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0) {
      const doctorsData = doctors.filter(
        (item) => item.specialization === specialization && item._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, specialization, docId]);
  return (
    
      <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
        <h1 className="text-3xl font-semibold">Top Doctors to Book</h1>
        <p className="sm:w-1/3 text-center text-md">
          Simply browse through our extensive list of trusted doctors.
        </p>

        <div className="w-full grid grid-cols-2  lg:grid-cols-4 gap-4 mt-5 overflow-scroll pt-4">
          {reldoc.slice(0, 5).map((item, index) => (
            <div
              onClick={() => {navigate(`/appointment/${item._id}`); window.scrollTo(0, 0)}}
              key={index}
              className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-7px] transition-all duration-500"
            >
              <img className="bg-[#EAEFFF]" src={item.image} alt="speciality" />
              <div className="p-4">
                <div className="flex gap-2 items-center">
                  <p className="bg-green-500 rounded-full w-2 h-2"></p>
                  <p className="text-sm text-green-500">Avaliable</p>
                </div>
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-sm font-semibold">{item.specialization}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    
  );
};

export default RelatedDoctors;
