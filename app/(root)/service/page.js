import React from "react";
import ServiceCategories from "@/components/service/ServiceCategories";
import ServiceCard from "@/components/service/ServiceCard";
import ContactBanner from "@/components/common/ContactBanner";
import LocationMap from "@/components/common/LocationMap";

const Services = () => {
  return (
    <>
      <div className="header-container flex flex-col items-center justify-center space-y-8">
        <h1 className="sub-heading text-center">
          What we <span className="text-secondary">offer?</span>
        </h1>
        <h6 className="text-center">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo <br />
          gravida quam hac risus pharetra elementum malesuada finibus? <br />
          Varius augue egestas tempor consectetur montes morbi senectus
        </h6>
      </div>

      <ServiceCategories />
      <ContactBanner/>
      <LocationMap/>
      
    </>
  );
};

export default Services;
