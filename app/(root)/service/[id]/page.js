import React from "react";
import ServiceHero from "@/components/service/serviceDetails/ServiceHero";
import { serviceData } from "@/lib/data";
import SubServieDetail from "@/components/service/serviceDetails/SubServieDetail";

const ServiceDetail = async ({ params }) => {
  const { id } = params;
  const data = serviceData.find((service) => service.title_id === id);
  // console.log(data);
  return (
    <>
      <ServiceHero data={data} />
      {data.sub_services.map((sub_service, index) => (
        <SubServieDetail key={index} data={sub_service} />
      ))}
    </>
  );
};

export default ServiceDetail;
