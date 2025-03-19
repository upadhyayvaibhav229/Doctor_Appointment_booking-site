import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col border border-b border-gray-400 shadow-xl w-[450px] h-[450px] p-6 mx-auto my-11 space-y-4 rounded-xl font-serif'>
    <div>

      <h1 className='text-3xl font-semibold'>Create Account</h1>
      <p className='text-md'>Please sign up to book appointment</p>
    </div>
      <div className='flex flex-col mt-5 space-y-2'>

      <label>Full Name</label>
      <input placeholder='Full Name' type="text"  className='border border-b border-gray-400 h-10 rounded p-2'/>
      <label>Email</label>
      <input type="email" placeholder='Enter Your Email'  className='border border-b border-gray-400 h-10 rounded p-2'/>
      <label>Password</label>
      <input type="password" placeholder='Enter Your Password'  className='border border-b border-gray-400 h-10 rounded p-2'/>
      </div>

    

      <button type="button" className='bg-primary hover:bg-blue-700 text-white p-2 rounded-md text-lg '>Create Account</button>

      <div className='mt-5'>

      <p className='text-sm'>Already have an account? <a className='text-primary underline' href="#login">Login here</a></p>
      </div>
    </div>
  )
}

export default Login
