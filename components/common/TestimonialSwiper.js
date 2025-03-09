import React from "react";
import { Carousel } from "../ui/carousel";

const TestimonialSwiper = () => {
    const slideData = [
        {
          title: "Mystic Mountains",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Urban Dreams",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Neon Nights",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Desert Whispers",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];

  return (
    <div className="my px">
      <div className="flex mb-[1.375rem] items-center justify-center sm:justify-between text-[8px] md:text-[14px]">
        <h2 className="sub-heading">
          What our <span className="text-secondary">Patients</span> say
        </h2>
        <h5 className="text-[1.4em] hidden sm:flex text-primary font-libre-bold">
          We value every patient
        </h5>
      </div>
      <div className="relative w-full h-full py-[2.25rem]">
      <Carousel slides={slideData} />
    </div>
    </div>
  );
};

export default TestimonialSwiper;
