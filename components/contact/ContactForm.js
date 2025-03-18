"use client";

import { Mail, Phone, User, Calendar } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="main-container">
      <div className=" flex flex-col lg:flex-row gap-4 lg:gap-[4%] lg:bg-white lg:shadow-[0px_0px_24px_0px] lg:shadow-light_ascent rounded-[0.75rem] lg:border lg:p-6">
        {/* Form Section */}
        <div className="w-full lg:w-[48%] ">
          <form className="flex flex-col gap-4">
            <div className="flex items-center border p-3 rounded-[0.25rem]">
              <User className="mr-3 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border p-3 rounded-[0.25rem]">
              <Mail className="mr-3 text-gray-500" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border p-3 rounded-[0.25rem]">
              <Phone className="mr-3 text-gray-500" size={20} />
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border p-3 rounded-[0.25rem]">
              <Calendar className="mr-3 text-gray-500" size={20} />
              <input
                type="number"
                placeholder="Enter your age"
                className="w-full outline-none"
              />
            </div>

            <textarea
              placeholder="Describe your issue"
              className="border p-3 rounded-[0.25rem] h-24 outline-none"
            ></textarea>

            <button className="!w-full btn-primary py-3 rounded-lg hover:bg-yellow-600">
              Submit
            </button>
          </form>
        </div>
        {/* Map Section */}
        <div className="w-full lg:w-[48%] bg-white shadow-md rounded-[0.75rem]">
          <iframe
            title="Google Maps Location"
            className="w-full h-64 lg:h-full rounded-[0.75rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.8252102303!2d-119.72049242435716!3d36.75076637226128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945ec223daca2d%3A0xdcc9025567688633!2sSunnyside%20Wellness%20%26%20Chiropractic%20Center!5e0!3m2!1sen!2sin!4v1742333278084!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
