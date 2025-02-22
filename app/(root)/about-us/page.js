import React from "react";
import MissionVision from "@/components/about/MissionVision";
import CareProcess from "@/components/about/CareProcess";
import DoctorProfile from "@/components/about/DoctorProfile";

const AboutUs = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">AboutUs Page</h1>
      <MissionVision />
      <CareProcess />
      <DoctorProfile />
    </>
  );
};

export default AboutUs;