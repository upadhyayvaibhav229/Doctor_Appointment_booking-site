import React from "react";
import { assets } from "../assets/assets/assets";

const Contact = () => {
  return (
    <div className="container mx-auto my-10 max-w-screen-lg px-5">
      {/* Section Title */}
      <div className="text-center text-2xl text-gray-700">
        <p className="uppercase font-semibold">
          Contact <span className="text-black">Us</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="my-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Contact Image */}
        <img
          src={assets.contact_image}
          className="w-full max-w-[360px] rounded-lg shadow-md"
          alt="Contact Us"
        />

        {/* Contact Details */}
        <div className="flex flex-col gap-6 md:w-2/4 text-sm text-gray-700">
          <b className="text-xl capitalize">Our Office</b>

          <p>
            00000 Willms Station <br />
            Suite 000, Washington, USA
          </p>

          <p>
            Tel: (000) 000-0000 <br />
            Email: greatstackdev@gmail.com
          </p>

          <p className="font-semibold">Careers at Prescripto</p>

          {/* Button */}
          <div>
            <button className="border border-black px-8 py-3 text-sm rounded-md hover:bg-black hover:text-white transition-all duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
