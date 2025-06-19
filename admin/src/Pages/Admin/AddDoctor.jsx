import React from "react";
import { assets } from "../../assets/assets_admin/assets";

const AddDoctor = () => {
  return (
    <div className="p-5">
      <form action="" className="border border-gray-200 p-4 rounded-lg ">
        <h1 className="text-2xl font-bold">Add Doctor</h1>
        <div className="mb-4 flex items-center gap-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="doc-img"
          >
            <img src={assets.upload_area} alt="upload area" />
          </label>
          <input className="hidden" type="file" id="doc-img" hidden />
          <p>
            Upload Doctor <br /> picture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
          <div className="flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
              <p className="font-bold ">Doctor Name</p>
              <input className=" p-2 rounded border border-gray-300 px-3 py-2" type="text" placeholder="name" required />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold ">Doctor Email</p>
              <input className=" p-2 rounded border border-gray-300 px-3 py-2" type="text" placeholder="Your email" required />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold ">Doctor Password</p>
              <input className=" p-2 rounded border border-gray-300 px-3 py-2" type="text" placeholder="Password" required />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold ">Experience</p>
              <select className=" p-2 rounded border border-gray-300" name="experience" id="">
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="6">6 years</option>
                <option value="7">7 years</option>
                <option value="8">8 years</option>
                <option value="9">9 years</option>
                <option value="10">10 years</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold ">Fees</p>
              <input className=" p-2 rounded border border-gray-300 px-3 py-2" type="number" placeholder="Your Fees" required />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold ">About me</p>
              <input className=" p-2 rounded border border-gray-300 px-3 py-2" type="text" placeholder="About me" required />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="font-bold ">Specialization</p>
              <select className=" p-2 rounded border border-gray-300" name="specialization" id="">
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="dermatology">Dermatology</option>
                <option value="gynecology">Gynecology</option>
                <option value="general medicine">General Medicine</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold ">Education</p>
              <input className=" p-2 rounded border border-gray-300 px-3 py-2" type="text" placeholder="Your Education" required />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold ">Address</p>
              <input className=" p-2 rounded border border-gray-300 px-3 py-2" type="text" placeholder="Address 1" required />
              <input className=" p-2 rounded border border-gray-300 px-3 py-2" type="text" placeholder="Address 2" required />
            </div>
          </div>

        </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="font-bold ">About Doctor</p>
            <textarea
              className=" p-2 rounded border w-full border-gray-300"
              placeholder="Write about doctor"
              rows={5}
              cols={30}
              required
            ></textarea>
          </div>
        <div className=" mt-4">

        <button className="bg-[#5f6FFF] text-white p-2 rounded cursor-pointer">Add Doctor</button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
