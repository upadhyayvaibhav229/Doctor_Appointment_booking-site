import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets/assets';

const Appointment = () => {
  const { id } = useParams();
  console.log("id", id);
  
  const { doctors } = useContext(AppContext);
  console.log(doctors);
  

  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    const fetchData = doctors.find((item) => item._id === id);
    console.log(fetchData);
    
    if (fetchData) {
      setDocInfo(fetchData);
    } else {
      setDocInfo(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, doctors]);

  return (
    <>

    <div className='flex flex-col sm:flex-row gap-3'>
      {docInfo ? (
        <>

        <div className='flex items-center justify-around'>
          <img src={docInfo.image} class="bg-primary w-full sm:max-w-72 rounded-lg" alt={docInfo.name} />
        </div>

          <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 space-y-2">

          <div className="flex gap-x-3">

          <h1 className='text-3xl font-bold'>{docInfo.name}</h1>
          <img src={assets.verified_icon} cla alt="" />
          </div>
          <div className=''>
          
          <p className='text-[#4B5563]'>{docInfo.degree} - {docInfo.speciality}  <span className='border px-2 rounded-full text-xs'>{docInfo.experience}</span></p>
          </div>

          <div className='flex gap-1'>
          <h4 className='text-[#4B5563]'>About </h4>
          <img src={assets.info_icon} className='w-[15px]' alt="" />
          </div>
          <p className='text-[#4B5563]'>{docInfo.about} </p>
          <p>Appointment fee: {docInfo.fees}$</p>
          </div>
        </>

      ) : (
        <p>Doctor not found.</p>
      )}
    </div>

    <div className="">
      <h1 className='text-3xl font-bold mt-10'>Book an appointment</h1>
      <p className='text-[#4B5563]'>Select a date and time for your appointment.</p>
      
    </div>
    </>
  );
};

export default Appointment;
