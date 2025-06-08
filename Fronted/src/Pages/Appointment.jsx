import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets/assets";
import RelatedDoctors from "../Components/RelatedDoctors";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Appointment = () => {
  const { id } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [docslots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(0);

  const navigate = useNavigate();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  useEffect(() => {
    const fetchData = doctors.find((item) => item._id === id);
    if (fetchData) {
      setDocInfo(fetchData);
    } else {
      setDocInfo(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, doctors]);

  useEffect(() => {
    getAvailabeSlots();
  }, [docInfo]);

  const getAvailabeSlots = async () => {
    setDocSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let tiemSlots = [];
      while (currentDate < endTime) {
        let formatedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        tiemSlots.push({
          datetime: new Date(currentDate),
          time: formatedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, tiemSlots]);
    }
  };

  return (
    <>
      {/* Doctor Info Section */}
      <motion.div
        className="flex flex-col sm:flex-row gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {docInfo ? (
          <>
            <div className="flex items-center justify-around">
              <img
                src={docInfo.image}
                className="bg-primary w-full sm:max-w-72 rounded-lg"
                alt={docInfo.name}
              />
            </div>

            <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 space-y-2">
              <div className="flex gap-x-3">
                <h1 className="text-3xl font-bold">{docInfo.name}</h1>
                <img src={assets.verified_icon} alt="verified" />
              </div>
              <p className="text-[#4B5563]">
                {docInfo.degree} - {docInfo.speciality}{" "}
                <span className="border px-2 rounded-full text-xs">
                  {docInfo.experience}
                </span>
              </p>
              <div className="flex gap-1">
                <h4 className="text-[#4B5563]">About</h4>
                <img src={assets.info_icon} className="w-[15px]" alt="info" />
              </div>
              <p className="text-[#4B5563]">{docInfo.about}</p>
              <p>Appointment fee: {docInfo.fees}$</p>
            </div>
          </>
        ) : (
          <p>Doctor not found.</p>
        )}
      </motion.div>

      {/* Appointment Booking Section */}
      <motion.div
        className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h1 className="text-3xl font-bold mt-10">Book an appointment</h1>
        <p className="text-[#4B5563]">
          Select a date and time for your appointment.
        </p>

        <div className="flex gap-3 items-center w-full overflow-x-scroll">
          {docslots.length > 0 &&
            docslots.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`text-center py-6 min-w-16 cursor-pointer mt-5 rounded-full ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : "border border-gray-300"
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>

        <div className="flex gap-3 items-center w-full overflow-x-scroll">
          {docslots.length > 0 &&
            docslots[slotIndex] &&
            docslots[slotIndex].map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light flex-shrink-0 py-2 px-4 rounded-full cursor-pointer mt-5 ${
                  slotTime === item.time
                    ? "bg-primary text-white"
                    : "border border-gray-300"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>

        <button
          onClick={() => navigate(`/my-appointments`)}
          className="bg-primary cursor-pointer w-fit px-5 mt-4 py-2 rounded-full text-white font-bold"
        >
          Book an Appointment
        </button>
      </motion.div>

      {/* Related Doctors */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <RelatedDoctors docId={id} speciality={docInfo?.speciality} />
      </motion.div>
    </>
  );
};

export default Appointment;
