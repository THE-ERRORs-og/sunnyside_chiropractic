import React from "react";
import ServiceDetails from "@/components/service/ServiceDetails";
import RelatedServices from "@/components/service/RelatedServices";

const ServiceDetail = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">ServiceDetail Page</h1>
      <ServiceDetails />
      <RelatedServices />
    </>
  );
};

export default ServiceDetail;