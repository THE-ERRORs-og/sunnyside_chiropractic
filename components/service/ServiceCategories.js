import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceCategories = () => {
  const services = [
    { name: "Chiropractic Care", title_id: "chiropractic-care" },
    { name: "Pain management treatment", title_id: "pain-management-and-treatment" },
    { name: "Injury Treatment", title_id: "injury-treatment" },
    { name: "Specialised Services", title_id: "specialized-services" },
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
