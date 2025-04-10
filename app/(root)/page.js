import React from "react";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServiceList from "@/components/home/ServiceList";
import TeamSection from "@/components/home/TeamSection";

import ContactBanner from "@/components/common/ContactBanner";
import TestimonialSwiper from "@/components/common/TestimonialSwiper";
import LocationMap from "@/components/common/LocationMap";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServiceList />
      <TeamSection />
      <ContactBanner/>
      <TestimonialSwiper/>
      <LocationMap />
    </>
  );
};

export default Home;