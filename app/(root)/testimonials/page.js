import React from "react";
import TestimonialList from "@/components/testimonials/TestimonialList";
import TestimonialCard from "@/components/testimonials/TestimonialCard";

const Testimonials = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Testimonials Page</h1>
      <TestimonialList />
      <TestimonialCard />
    </>
  );
};

export default Testimonials;