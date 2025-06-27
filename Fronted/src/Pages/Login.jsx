import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState("login"); // "login" or "signup"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { backendUrl, setToken } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    // 🔐 Frontend validation
    if (!email || !password || (state === "signup" && !name)) {
      return toast.error("All fields are required");
    }

    if (state === "signup" && password.length < 8) {
      return toast.error("Password must be at least 8 characters");
    }

    try {
      if (state === 'signup') {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password
        });

        if (data.success) {
          toast.success(data.message);
          // navigate('/login');
        } else {
          toast.error(data.message || "Signup failed");
        }
      } else if (state === 'login') {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password
        });

        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          toast.success(data.message);
          navigate('/');
        } else {
          toast.error(data.message || "Login failed");
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
      console.error("Login/Signup error:", error);
    }
  };

  useEffect(()=> {
    if(localStorage.getItem('token')) {
      navigate('/');
    }
  },[]);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className='min-h-[80vh] flex items-center justify-center px-4'>
      <div className="flex flex-col gap-4 border shadow-lg w-full max-w-md rounded-xl text-[#5E5E5E] p-8">
        <p className='text-2xl font-semibold '>
          {state === "login" ? "Login" : "Sign Up"}
        </p>
        <p className="text-gray-500">
          {state === "login"
            ? "Please login to book appointments."
            : "Create an account to get started."}
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
              required
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
            required
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
            required
          />
        </div>

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
