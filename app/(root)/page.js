import React from "react";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServiceList from "@/components/home/ServiceList";
import TeamSection from "@/components/home/TeamSection";
import { Contact } from "lucide-react";
import ContactBanner from "@/components/common/ContactBanner";
import TestimonialSwiper from "@/components/common/TestimonialSwiper";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServiceList />
      <TeamSection />
      <ContactBanner/>
      <TestimonialSwiper/>
    </>
  );
};

export default Home;