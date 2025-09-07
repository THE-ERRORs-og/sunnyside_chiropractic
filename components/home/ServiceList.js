import React from "react";

import ServiceListCard from "../common/ServiceListCard";

const ServiceList = () => {
  return (
    <div className="my px">
      <div className="flex mb-[1.375rem] items-center justify-center sm:justify-between text-[8px] md:text-[14px]">
        <h2 className="sub-heading">
          What we <span className="text-secondary">offer?</span>
        </h2>
        <h5 className="text-[1.4em] hidden sm:flex text-primary font-libre-bold">
          We value every patient
        </h5>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-between gap-y-8 sm:gap-x-10 lg:gap-x-[42px]">
        <ServiceListCard
          title={"Chiropractic Adjustments"}
          content={
            "Precise spinal manipulations to restore proper alignment and relieve pain"
          }
        />
        <ServiceListCard
          title={"Custom Orthotics"}
          content={
            "Individually tailored orthotic devices to support foot mechanics and alleviate related discomfort"
          }
        />
        <ServiceListCard
          title={"Sports Injuries Treatment"}
          content={
            "Specialized care aimed at recovery from athletic injuries Wayback Machine"
          }
        />
        <ServiceListCard
          title={"Prenatal Chiropractic Care"}
          content={
            "Chiropractic support and adjustments tailored for expecting mothers"
          }
        />
      </div>
    </div>
  );
};

export default ServiceList;
