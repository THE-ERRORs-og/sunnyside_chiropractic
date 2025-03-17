import React from "react";
import MissionVision from "@/components/about/MissionVision";
import CareProcess from "@/components/about/CareProcess";
import DoctorProfile from "@/components/about/DoctorProfile";
import ContactBanner from "@/components/common/ContactBanner";
import LocationMap from "@/components/common/LocationMap";

const AboutUs = () => {
  return (
    <>
      <MissionVision />
      <CareProcess />
      <DoctorProfile />
      <ContactBanner />
      <LocationMap />
    </>
  );
};

export default AboutUs;