import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { assets } from '../assets/assets/assets';

const Appointment = () => {
  const { id } = useParams();
  // console.log("id", id);

  const { doctors } = useContext(AppContext);
  // console.log(doctors);


  const [docInfo, setDocInfo] = useState(null);
  const [docslots, setDocSlots] = useState(null);
  const [slotIndex, setSlotIndex] = useState([]);
  const [slotTime, setSlotTime] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = doctors.find((item) => item._id === id);
    // console.log(fetchData);

    if (fetchData) {
      setDocInfo(fetchData);
    } else {
      setDocInfo(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, doctors]);

  useEffect(()=>{getAvailabeSlots()},[docInfo])
  useEffect(()=>{console.log("Slots", docslots);
  },[docslots])

  const getAvailabeSlots = async () => {
    setDocSlots([]);

    // getting current date
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      // getting date from index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let tiemSlots = []

      while (currentDate < endTime) {
        let formatedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        // add slot to array
        tiemSlots.push({
          datetime: new Date(currentDate),
          time: formatedTime
        })

        // increment current time by 30 min
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      };
      setDocSlots(prev => ([...prev, tiemSlots]))
    }
  }

  return (
    <>

      <div className='flex flex-col sm:flex-row gap-3'>
        {docInfo ? (
          <>

            <div className='flex items-center justify-around'>
              <img src={docInfo.image} className="bg-primary w-full sm:max-w-72 rounded-lg" alt={docInfo.name} />
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

        <button onClick={() => navigate('/my-appointments')} className='bg-primary cursor-pointer w- px-5 mt-4 py-2 rounded-full text-white font-bold'>Book an Appointment</button>

      </div>
    </>
  );
};

export default Appointment;
