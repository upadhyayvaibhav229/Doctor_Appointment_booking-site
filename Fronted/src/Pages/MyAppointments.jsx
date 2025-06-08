import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const {doctors} = useContext(AppContext)
  return (
    <div>

      <h1 className='text-gray-600 font-medium border-b pb-2 mt-12 text-lg'>My Appointment</h1>
    <div>
        {
          doctors.slice(0,2).map((item,index)=>(
            <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b">

            <div key={index}>
                <img className='w-36 bg-[#EAEFFF]' src={item.image} alt={item.name}  />
            </div>
            <div className='flex-1 text-sm text-[#5E5E5E]'>
              <p className='font-semibold mt-1'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='font-medium text-[#4B5563] mt-1'>Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p className='mt-1'><span className='font-medium text-[#4B5563]'>Date & Time: </span>8, June, 2025 | 10:44 AM</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-6'>
              <button className='hover:bg-[#5F6FFF] hover:text-white py-2 sm:min-w-48 border rounded text-[#696969] transition-all duration-300' type="button">Pay Online</button>
              <button className='hover:bg-red-600 hover:text-white py-2 sm:min-w-48 border rounded text-[#696969] transition-all duration-300' type="button">Cancel Appointment</button>
            </div>
            </div>
          ))
        }
    </div>
    </div>
  )
}

export default MyAppointments
