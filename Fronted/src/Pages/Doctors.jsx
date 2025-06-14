import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const Doctors = () => {
  const { speciality } = useParams()
  
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)
  const [filterDocs, setFilterDocs] = useState([])

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ]

  const applyFilter = () => {
    if (speciality) {
      setFilterDocs(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDocs(doctors)
    }
  } 

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality]) 

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-screen overflow-y-scroll"
    >
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-10 mt-10">
        {/* Filter Buttons */}
        <div className="hidden sm:flex flex-col w-full sm:w-[20vw] gap-y-5">
          {specialities.map((item, index) => (
            <motion.p
              key={index}
              onClick={() => navigate(`/doctors/${item}`)}
              variants={itemVariants}
              className={`w-[20vw] border border-blue-300 text-md rounded px-2 py-2 cursor-pointer hover:bg-blue-100 ${
                speciality === item ? "bg-blue-200 font-semibold" : ""
              }`}
            >
              {item}
            </motion.p>
          ))}
        </div>

        {/* for mobile */}
        <div className="sm:hidden w-full">
          <select
            onChange={(e) => navigate(`/doctors/${e.target.value}`)}
            className="w-full border border-blue-300 text-md rounded px-2 py-2 cursor-pointer hover:bg-blue-100"
          >
            {specialities.map((item, index) => (
              <option
                key={index}
                value={item}
                className={`w-[20vw] border border-blue-300 text-md rounded px-2 py-2 cursor-pointer hover:bg-blue-100 ${
                  speciality === item ? "bg-blue-200 font-semibold" : ""
                }`}
              >
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Filtered Doctors List */}
        <motion.div
          variants={containerVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center"
        >
          {filterDocs.map((item, index) => (
            <motion.div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              variants={itemVariants}
              className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-7px] transition-all duration-500"
            >
              <img className="bg-[#EAEFFF]" src={item.image} alt="specaility" />
              <div className="p-4">
                <div className="flex gap-2 items-center">
                  <p className="bg-green-500 rounded-full w-2 h-2"></p>
                  <p className="text-sm text-green-500">Available</p>
                </div>
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-sm font-semibold">{item.speciality}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Doctors

