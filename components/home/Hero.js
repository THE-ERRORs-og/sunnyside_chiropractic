import React from "react";
import GrayGradient from "../common/GrayGradient";
import { ArrowRight } from "lucide-react";
import MainButton from "../common/MainButton";
import { redirect } from "next/navigation";
import ContactButton from "../common/ContactButton";

const Hero = () => {
  return (
    <div className="relative w-full h-[20.94rem] md:h-[44.4375rem] lg:h-[52.6875rem]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        loading="lazy"
        poster="/img/hero-video-placeholder.webp"
      >
        <source src="https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <GrayGradient className={"h-full"} />
      <div className="px absolute w-[100%]  top-[25%] md:top-[20%]">
        <div className="space-y-3 md:space-y-5">
          <h3 className="hero-subheading font-semibold text-dark_ascent">
            40+ Years of Experience
          </h3>
          <h1 className="hero-heading text-ascent ">
            Helping You
            <span className="font-libre-italic text-secondary">
              <br className="" />
              Heal {" "}
            </span>
            & Thrive
          </h1>

          <p className="hero-content text-white">
            We treat a range of musculoskeletal conditions <br></br>
            including back pain, neck pain, injuries and headaches.
          </p>
        </div>

        <div className="md:flex md:flex-row flex-col space-x-3  md:space-x-5">
          <ContactButton />
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
