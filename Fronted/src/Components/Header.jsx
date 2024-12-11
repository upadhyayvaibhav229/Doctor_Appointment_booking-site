import React from 'react'
import group_profiles from '../assets/assets/group_profiles.png'
import arrow_icon from '../assets/assets/arrow_icon.svg'
import header_img from '../assets/assets/header_img.png'
const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary items-center justify-between rounded-lg px-6 md:px-10 '>
      {/* ------------- Left side ----------------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center m-auto md:py-[10vw] md:mb-[-30px] gap-4'>
        <p className='text-3xl md:text-4xl md:font-semibold text-white font-semibold md:leading-tight leading-tight lg:leading-tight '>Book Appointments <br/> With Trusted Doctors</p>
        <div className='flex flex-col md:flex-row gap-3 text-white text-sm font-light'>
            <img className='w-28' src={group_profiles} alt='logo' />
            <p className=''>Simply browse throug our extensive list of trusted doctors,<br className='hidden sm:block'/> Schedule your application hassle-free</p>
        </div>
        <a href='#' className='rounded flex items-center gap-2 bg-white px-8 py-3 text-gray-800 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-500'>
        Book Appointments <img className='w-3 ' src={arrow_icon} alt=''/>  
        </a>
      </div>
      {/* ------------- Right side ----------------- */}
      <div className='md:w-1/2 flex items-center justify-center '>
        <img className='h-auto ' src={header_img}/>
      </div>
    </div>
  )
}

export default Header
