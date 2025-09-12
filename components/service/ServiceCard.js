import React from "react";
import GrayGradient from "../common/GrayGradient";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative flex flex-col items-center justify-center  hover:border-[0.24px] border-black hover:shadow-2xl rounded-[0.75rem] sm:h-[70vh]  sm:w-[calc(50%-21px)] lg:w-[calc(25%-31.5px)] ">
      <video
        className="w-full h-full rounded-[0.75rem] object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/hero-video-placeholder.webp"
      >
        <source src={service.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <GrayGradient className={"h-full rounded-[0.75rem] "} />
      <div className="absolute flex flex-col items-center justify-between w-full h-full p-6">
        <h3 className="service-heading text-secondary text-center">
          {service.name}
        </h3>

        <Link
          href={`/service/${service.title_id}`}
          className="bg-[#FFC24A] text-center h-fit w-full pt-2 pb-2 pr-7 pl-7 md:pt-3.5 md:pb-3.5 md:pl-12 md:pr-12 text-[0.75rem] leading-[0.70681rem] md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.5rem] text-[#53683F] font-medium rounded-xl transition duration-300 ease-in-out hover:bg-[#ea9a3f]"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};
export default ServiceCard;
