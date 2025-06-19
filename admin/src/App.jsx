import React from 'react';
import Login from './Pages/Login';
import { ToastContainer } from 'react-toastify';
import { useAdminContext } from './Contexts/AdminContext';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router-dom';

const App = () => {
  const { adminToken } = useAdminContext();

  return adminToken ? (
    <div className="min-h-screen bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
};

export default App;
