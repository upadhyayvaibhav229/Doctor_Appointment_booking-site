import React from "react";
import { assets } from "../assets/assets/assets";

const About = () => {
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="text-center text-2xl text-[#707070]">
          <p>
            About <span className="text-gray-700 font-semibold">Us</span>
          </p>
        </div>

        <div className="my-10 flex justify-between">
          <img
            src={assets.about_image}
            className="w-full max-w-[360px]"
            alt="about"
          />

          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
            <p className="">
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p>
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Prescripto is here to support you every
              step of the way.
            </p>

            <b>Our Vision</b>
            <p>
              Our vision is to revolutionize the healthcare industry by
              providing a comprehensive platform that simplifies the process of
              managing your health. We aim to empower individuals to take
              control of their well-being and make informed decisions about
              their healthcare needs.
            </p>
          </div>
        </div>

        <div className="text-2xl my-4">
          <p>
            Why <span className="text-gray-700 font-semibold">Choose Us</span>
          </p>
        </div>
        <div class="flex flex-col md:flex-row gap-1 mb-20">
          <div
            class="border px-10 md:px-16 py-10 sm:py-16 flex flex-col gap-4 text-[15px] 
                hover:bg-primary hover:text-white transition-all duration-300 
                text-gray-600 cursor-pointer rounded-lg shadow-md hover:shadow-lg"
          >
            <b class="text-lg">EFFICIENCY:</b>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>

          <div
            class="border px-10 md:px-16 py-10 sm:py-16 flex flex-col gap-4 text-[15px] 
                hover:bg-primary hover:text-white transition-all duration-300 
                text-gray-600 cursor-pointer rounded-lg shadow-md hover:shadow-lg"
          >
            <b class="text-lg">CONVENIENCE:</b>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>

          <div
            class="border px-10 md:px-16 py-10 sm:py-16 flex flex-col gap-4 text-[15px] 
                hover:bg-primary hover:text-white transition-all duration-300 
                text-gray-600 cursor-pointer rounded-lg shadow-md hover:shadow-lg"
          >
            <b class="text-lg">PERSONALIZATION:</b>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
