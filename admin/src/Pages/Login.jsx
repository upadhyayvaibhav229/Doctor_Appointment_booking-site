import React, { useState } from "react";
import { useAdminContext } from "../Contexts/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import '../App.css';

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // fixed: use lowercase 'password'
  const [loading, setLoading] = useState(false); // new loader state
  const { setAdminToken, backendUrl } = useAdminContext();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // show loader immediately

    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password,
        });

        if (data.success) {
          toast.success("Admin login successful");
          setAdminToken(data.token);
          localStorage.setItem("adminToken", data.token);

          setTimeout(() => {
            window.location.href = "/";
          }, 1500); // wait for loader animation
        } else {
          setLoading(false);
        }
      }
    } catch (err) {
      setLoading(false); // hide loader on error
      console.error("Login Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-500">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col justify-center items-center min-h-[80vh] bg-gray-100"
    >
      <div className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg min-w-[400px]">
        <p className="text-2xl font-semibold text-center">
          <span className="text-blue-700">{state}</span> Login
        </p>

        <div className="input-container flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="input-container flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-[#5f6FFF] text-white py-2 px-4 rounded-md"
        >
          Login
        </button>

        <div className="flex justify-between items-center mt-4">
          {state === "Admin" ? (
            <p>
              Doctors Login?{" "}
              <span
                onClick={() => setState("Doctor")}
                className="text-blue-700 cursor-pointer"
              >
                click here
              </span>
            </p>
          ) : (
            <p>
              Admin Login?{" "}
              <span
                onClick={() => setState("Admin")}
                className="text-blue-700 cursor-pointer"
              >
                click here
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Login;
