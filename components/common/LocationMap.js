import React from "react";
import MainButton from "./MainButton";

const LocationMap = () => {
  return (
    <div className="px">
      <div className="flex  items-center justify-center sm:justify-between text-[8px] md:text-[14px]">
        <h2 className="sub-heading">
          Where are<span className="text-secondary"> we?</span>
        </h2>
        <h5 className="text-[1.4em] hidden sm:flex text-primary font-libre-bold">
          We value every patient
        </h5>
      </div>

      <div className="my pb-8 flex flex-col sm:flex-row space-y-2  md:space-x-1 w-full h-fit">
        <div className="w-full md:w-1/2  h-fit flex flex-col  items-start">
          <h3 className="text-[1.5rem] lg:text-[1.75rem] md:leading-[3rem] lg:leading-[4.25rem] font-semibold">
            Sunnyside Chiropractic Care
          </h3>
          <h4 className="text-[1rem] leading-[2.1875rem] lg:text-[1.5rem] md:leading-[3rem] lg:leading-[4.25rem]">
            5207 E Belmont Ave, Fresno <br />
            CA, 93727, United States
          </h4>
          <button className="bg-secondary mt-8 h-fit w-fit pt-2 pb-2 pr-7 pl-7 md:pt-3.5 md:pb-3.5 md:pl-12 md:pr-12 text-[0.75rem] leading-[0.70681rem] md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.5rem] text-black underline font-medium transition duration-300 ease-in-out hover:bg-[#ea9a3f] rounded-[0.5635rem_1.12706rem]">
            +15594541000
          </button>
        </div>
        <div className="md:h-[18.27181rem] w-full md:w-[26.70025rem] lg:h-[37.125rem] lg:w-[54.25rem]  lg:pl-12 rounded-[0.25rem]">
          {/* <img
            src="/img/map-img.png"
            alt="About Us"
            className=" rounded-[0.25rem] shadow-xl  object-cover object-center"
          /> */}
          <iframe
            title="Google Maps Location"
            className="w-full h-full rounded-[0.25rem] shadow-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.8252102303!2d-119.72049242435716!3d36.75076637226128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945ec223daca2d%3A0xdcc9025567688633!2sSunnyside%20Wellness%20%26%20Chiropractic%20Center!5e0!3m2!1sen!2sin!4v1742333278084!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
