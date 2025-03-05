import React from "react";
import MainButton from "../common/MainButton";

const AboutSection = () => {
  return (
    <div className="my pb-8 flex px space-x-3 w-full h-fit">
      <div className="w-1/2 h-fit flex flex-col items-start space-y-1 md:space-y-8  ">
        <h2 className="sub-heading">
          About <span className="text-secondary">Us</span>
        </h2>
        <p className="">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida
          quam hac risus pharetra elementum malesuada finibus? Varius augue
          egestas tempor consectetur montes morbi senectus. <br/> Lorem ipsum odor
          amet, consectetuer adipiscing elit. Commodo gravida quam hac risus
          pharetra elementum malesuada finibus? Varius augue egestas tempor
          consectetur montes morbi senectus.  <br/>Lorem ipsum odor amet, consectetuer
          adipiscing elit. Commodo gravida quam hac risus pharetra elementum
          malesuada finibus? Varius augue egestas tempor consectetur montes
          morbi senectus.
        </p>
        <MainButton text="Learn More" />
      </div>
      <img
        src="/img/about-img.jpeg"
        alt="About Us"
        className="h-[14.25rem] md:h-[31.8125rem] lg:h-[41.0625rem] w-1/2 rounded-[0.25rem] object-cover object-center"
      />
    </div>
  );
};

export default AboutSection;
