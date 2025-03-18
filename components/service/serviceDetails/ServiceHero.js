import React from "react";
import GrayGradient from "@/components/common/GrayGradient";
import { ArrowRight } from "lucide-react";
import MainButton from "@/components/common/MainButton";

const ServiceHero = ({data}) => {
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
        poster="/img/hero-video-placeholder.png"
      >
        <source src="/img/hero-video/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <GrayGradient className={"h-full"} />
      <div className="px absolute w-[100%]  top-[25%] md:top-[20%]">
        <div className="space-y-3 md:space-y-5">
          <h1 className="hero-heading text-ascent ">
            {data.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="font-libre-italic text-secondary">
              {data.title.split(" ").slice(-1)}
            </span>
          </h1>

          <p className="hero-content text-white">
            {data.description}
          </p>
        </div>

        <div className="md:flex md:flex-row flex-col space-x-3  md:space-x-5">
          <MainButton text="Contact Us" className={"mt-4 md:mt-8"} />
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
