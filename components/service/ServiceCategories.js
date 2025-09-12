import React from "react";
import ServiceCard from "./ServiceCard";
import { video } from "framer-motion/client";

const ServiceCategories = () => {
  const services = [
    { name: "Chiropractic Care", title_id: "chiropractic-care" , videoUrl: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/hero-video.mp4#t=19,30"},
    { name: "Pain management treatment", title_id: "pain-management-and-treatment" , videoUrl: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/hero-video.mp4#t=33,40"},
    { name: "Injury Treatment", title_id: "injury-treatment", videoUrl: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/hero-video.mp4#t=9,18" },
    { name: "Specialised Services", title_id: "specialized-services" , videoUrl: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/hero-video.mp4#t=25,32"},
  ];
  return (
    <div className="my px">
      <div className="flex flex-wrap justify-center sm:justify-between gap-y-8 sm:gap-x-10 lg:gap-x-[42px]">
        {services.map((item) => (
          <ServiceCard key={item.title_id} service={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;
