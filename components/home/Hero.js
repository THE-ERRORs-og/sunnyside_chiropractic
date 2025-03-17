import React from "react";
import GrayGradient from "../common/GrayGradient";
import { ArrowRight } from "lucide-react";
import MainButton from "../common/MainButton";

const Hero = () => {
  return (
    <div className="bg-[url('/img/hero-img.jpeg')] bg-cover bg-center w-full h-[20.94rem] md:h-[44.4375rem] lg:[52.6875rem] relative top-0">
      <GrayGradient
        className={"h-[20.94rem] md:h-[44.4375rem] lg:[52.6875rem]"}
      />
      <div className="px absolute w-[100%]  top-[25%] md:top-[20%]">
        <div className="space-y-3 md:space-y-5">
          <h3 className="hero-subheading font-semibold text-dark_ascent">
            40+ Years of Experience
          </h3>
          <h1 className="hero-heading text-ascent ">
            Helping You
            <span className="font-libre-italic text-secondary">
              <br className="" />
              Heal
            </span>
             & Thrive
          </h1>

          <p className="hero-content text-white">
            We treat a range of musculoskeletal conditions <br></br>
            including back pain, neck pain, injuries and headaches.
          </p>
        </div>

        <div className="md:flex md:flex-row flex-col space-x-3  md:space-x-5">
          <MainButton text="Contact Us" className={"mt-4 md:mt-8"} />
          <button className="group pt-3.5 pb-3.5 md:ml-12 text-[0.75rem] leading-[0.70681rem] md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.5rem] text-white font-medium rounded-xl mt-4 md:mt-8 inline-block transition-all duration-300 hover:text-secondary">
            Get clinic tour{" "}
            <ArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
