import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { specaility } = useParams()
  // console.log(specaility);
  
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)
  const [filterDocs, setFilterDocs] = useState([])

  const specialities = [
    "General Physican",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ]

  const applyFilter = () => {
    if (specaility) {
      setFilterDocs(doctors.filter(doc => doc.specaility === specaility))
    } else {
      setFilterDocs(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, specaility])

  return (
    <div className=''>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-10 mt-10">
        {/* Filter Buttons */}
        <div className='space-y-5'>
          {specialities.map((item, index) => (
            <p
              key={index}
              onClick={() => navigate(`/doctors/${item}`)}
              className={`w-[20vw] border border-blue-300 text-md rounded px-2 py-2 cursor-pointer hover:bg-blue-100 ${
                specaility === item ? "bg-blue-200 font-semibold" : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        {/* Filtered Doctors List */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center'>
          {filterDocs.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-7px] transition-all duration-500"
            >
              <img className="bg-[#EAEFFF]" src={item.image} alt="specaility" />
              <div className="p-4">
                <div className="flex gap-2 items-center">
                  <p className="bg-green-500 rounded-full w-2 h-2"></p>
                  <p className="text-sm text-green-500">Available</p>
                </div>
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-sm font-semibold">{item.specaility}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
