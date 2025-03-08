import React from "react";
import TestimonialList from "@/components/testimonials/TestimonialList";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import Reviews from "@/components/testimonials/Reviews";
import ContactBanner from "@/components/common/ContactBanner";

const Testimonials = () => {
  return (
    <>
      <div className="header-container flex flex-col items-center text-center">
        <h1 className="sub-heading">
          Our Wall of <span className="text-secondary">Love</span>
        </h1>
        <p className="font-poppins">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida
          quam hac risus pharetra elementum malesuada finibus? Varius augue
          egestas tempor consectetur montes morbi senectus
        </p>
        <div className="flex items-center gap-4">
          <Reviews rating={4.5} />
          <p className="font-poppins">Reviews on Google</p>
        </div>
      </div>
      <TestimonialList />
      <ContactBanner />
      {/* <TestimonialCard /> */}
    </>
  );
};

export default Testimonials;
