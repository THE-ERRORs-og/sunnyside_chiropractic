import React from "react";
import GrayGradient from "../common/GrayGradient";
import { ArrowRight } from "lucide-react";
import MainButton from "../common/MainButton";

const Hero = () => {
  return (
    <div className="bg-[url('/img/hero-img.jpeg')] bg-cover bg-center w-full h-[80vh] relative top-0">
      <GrayGradient  className={"h-[80vh]"}/>
      <div className="px absolute w-[100%] text-[18px] md:text-[24px] top-[15%] md:top-[20%]">
        <div className="space-y-3 md:space-y-5">
          <h3 className="text-[0.6em] md:text-[0.8em] font-semibold text-dark_ascent">
            40+ Years of Experience
          </h3>
          <h1 className="text-[3.5em] md:text-[4em] lg:text-[4.4em] leading-none font-libre-bold text-[#F5EDE1] ">
            Get Your
            <span className="font-libre-italic text-secondary block md:inline">
              <br className="md:flex hidden" />
              Bones
            </span>
            Fixed
          </h1>

          <h4 className="text-[0.8em] text-white font-normal">
            We treat a range of musculoskeletal conditions <br></br>
            including back pain, neck pain, injuries and headaches.
          </h4>
        </div>

        <div className="md:flex md:flex-row flex-col space-x-3  md:space-x-5">
          <MainButton text="Contact Us" className={"mt-4 md:mt-8"} />
          <button className="group pt-3.5 pb-3.5 md:ml-12 text-[0.8em] text-white font-medium rounded-xl mt-4 md:mt-8 inline-block transition-all duration-300 hover:text-secondary">
            Get clinic tour{" "}
            <ArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
