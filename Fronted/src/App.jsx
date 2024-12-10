import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Doctors from "./Pages/Doctors"
import Login from "./Pages/Login"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import MyProfile from "./Pages/MyProfile"
import MyAppointments from "./Pages/MyAppointments"
import Appointment from "./Pages/Appointment"
import Layout from "./Layout"

function App() {

  return (
  <div className="mx-4 sm:mx-[10%]">
  <Layout/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:specaility" element={<Doctors />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/my-Profile" element={<MyProfile />} />
      <Route path="/my-Appointments" element={<MyAppointments />} />
      <Route path="/appointment/:docId" element={<Appointment />} /> 

    </Routes>
  </div>
  )
}

export default App
