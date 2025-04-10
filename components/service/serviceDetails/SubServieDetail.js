import MainButton from "@/components/common/MainButton";
import Image from "next/image";
import React from "react";

const SubServiceDetail = ({ data }) => {
  return (
    <div className="main-container">
      {/* Title with last word highlighted */}
      <h2 className="sub-heading mb-4">
        {data.title.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="text-secondary">
          {data.title.split(" ").slice(-1)}
        </span>
      </h2>

      {/* Responsive Layout */}
      <div
        className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
          !(data.id & 1) && "md:flex-row-reverse"
        } `}
      >
        {/* Text Section */}
        <div className="flex-1 text-justify">
          <p className="whitespace-pre-line">{data.description}</p>
          <MainButton
            text="Schedule Appointment"
            className="hidden md:block mt-4 md:mt-8"
          />
        </div>

        {/* Image Section with responsive sizing */}
        <div className="w-full md:w-[48%]">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-64 md:h-[22rem] lg:h-[33rem] object-cover rounded-lg"
          />
        </div>
        <MainButton
          text="Schedule Appointment"
          className="md:hidden mt-4 md:mt-8"
        />
      </div>
    </div>
  );
};

export default SubServiceDetail;
