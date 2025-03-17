import React from "react";
import MissionVision from "@/components/about/MissionVision";
import CareProcess from "@/components/about/CareProcess";
import ContactBanner from "@/components/common/ContactBanner";
import LocationMap from "@/components/common/LocationMap";
import AboutDoctor from "@/components/about/AboutDoctor";
import AboutStaff from "@/components/about/AboutStaff";

const AboutUs = () => {
  return (
    <>
      <MissionVision />
      <CareProcess />
      <AboutDoctor />
      <AboutStaff />
      <ContactBanner />
      <LocationMap />
    </>
  );
};

export default AboutUs;