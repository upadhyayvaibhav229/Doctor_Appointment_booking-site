import React from 'react'
import Login from './Pages/Login'
import { ToastContainer } from 'react-toastify'
import { useAdminContext } from './Contexts/AdminContext'
import Navbar from './Components/Navbar'

const App = () => {
  const {adminToken} = useAdminContext();
  return adminToken ? (
    <div className='bg-[#F8F9FD'>
      <ToastContainer/>
      <Navbar />
    </div>
  ) : (
    <div>
      <Login />
      <ToastContainer/>
    </div>
  )
}

export default App
