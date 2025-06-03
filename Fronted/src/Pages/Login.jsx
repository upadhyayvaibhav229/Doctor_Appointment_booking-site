import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState("login"); // "login" or "signup"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };



  return (
    <form  className='min-h-[80vh] flex items-center justify-center px-4'>
      <div className="flex flex-col gap-4 border shadow-lg w-full max-w-md rounded-xl text-[#5E5E5E] p-8">
        <p className='text-2xl font-semibold '>
          {state === "login" ? "Login" : "Sign Up"}
        </p>
        <p className=" text-gray-500">
          {state === "login" ? "Please login to book appointments." : "Create an account to get started."}
        </p>

        {state === "signup" && (
          <div className="w-full">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className='border border-[#DADADA] rounded-md p-2 w-full'
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
            />
          </div>
        )}

        <div className="w-full">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className='border border-[#DADADA] rounded-md p-2 w-full'
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@example.com"
          />
        </div>

        <div className="w-full">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className='border border-[#DADADA] rounded-md p-2 w-full'
            value={formData.password}
            onChange={handleInputChange}
            placeholder="********"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className='bg-primary text-white px-4 py-2 rounded-md w-full'>
          {state === "login" ? "Login" : "Sign Up"}
        </button>

        <p className="text-sm text-center">
          {state === "login" ? (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setState("signup")}
                className='text-primary cursor-pointer font-semibold'
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("login")}
                className='text-primary cursor-pointer font-semibold'
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login;
