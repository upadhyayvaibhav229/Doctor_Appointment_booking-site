import React, { useState } from 'react'

const Login = () => {
    const [state, setState] = useState('Admin');
  return (
    <form className='flex flex-col justify-center items-center h-screen'>
      <div className='login-container grid gap-4'>
        <p><span>{state}</span> Login</p>
        <div>

        <div className="input-container">
        <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />

        </div>
        <div className="input-container">
        <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        </div>

      </div>
    </form>
  )
}

export default Login
