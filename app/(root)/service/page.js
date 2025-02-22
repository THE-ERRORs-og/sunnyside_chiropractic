import React from "react";
import ServiceCategories from "@/components/service/ServiceCategories";
import ServiceCard from "@/components/service/ServiceCard";

const Services = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Services Page</h1>
      <ServiceCategories />
      <ServiceCard />
    </>
  );
};

export default Services;