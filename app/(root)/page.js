import React from "react";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServiceList from "@/components/home/ServiceList";
import TeamSection from "@/components/home/TeamSection";

const Home = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <Hero />
      <AboutSection />
      <ServiceList />
      <TeamSection />
      
    </>
  );
};

export default Home;