import React from "react";
import MainButton from "../common/MainButton";

const AboutSection = () => {
  return (
    <div className="my pb-8 flex px space-x-3 w-full  h-[50vh] md:h-[80vh]">
      <div className="w-1/2 flex flex-col text-[8px] md:text-[14px] items-start space-y-1 md:space-y-8  ">
        <h2 className="sub-heading">
          About <span className="text-secondary">Us</span>
        </h2>
        <p className="font-medium [0.5em] md:text-[1em] lg:text-[1.5em]">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida
          quam hac risus pharetra elementum malesuada finibus? Varius augue
          egestas tempor consectetur montes morbi senectus. Lorem ipsum odor
          amet, consectetuer adipiscing elit. Commodo gravida quam hac risus
          pharetra elementum malesuada finibus? Varius augue egestas tempor
          consectetur montes morbi senectus. Lorem ipsum odor amet, consectetuer
          adipiscing elit. Commodo gravida quam hac risus pharetra elementum
          malesuada finibus? Varius augue egestas tempor consectetur montes
          morbi senectus.
        </p>
        <MainButton text="Learn More" />
      </div>
      <img
        src="/img/about-img.jpeg"
        alt="About Us"
        className=" h-full w-1/2 rounded-[0.25rem] object-cover object-center"
      />
    </div>
  );
};

export default AboutSection;
