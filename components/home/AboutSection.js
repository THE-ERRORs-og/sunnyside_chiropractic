import React from "react";
import MainButton from "../common/MainButton";

const AboutSection = () => {
  return (
    <div className="my pb-8 flex px space-x-3 w-full h-fit">
      <div className="w-1/2 h-fit flex flex-col items-start space-y-1 md:space-y-8  ">
        <h2 className="sub-heading">
          About <span className="text-secondary">Us</span>
        </h2>
        <p className="lg:text-[1.5rem]   lg:leading-[2.25rem]">
          At Sunnyside Wellness & Chiropractic Center, we are dedicated to
          providing expert chiropractic care that helps individuals live
          pain-free and move with ease.
          <br />
          With a focus on holistic, non-invasive treatments, we address a range
          of musculoskeletal conditions, including back pain, neck pain, and
          injuries. Our team is committed to personalized care, ensuring each
          patient receives the treatment and guidance they need to achieve
          long-term wellness.
          <br />
          Whether you are seeking relief from discomfort or looking to improve
          your overall health, we are here to support your journey to a
          healthier, more active life.
        </p>
        <MainButton text="Learn More" />
      </div>
      <img
        src="https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/about-img1.webp"
        alt="About Us"
        className="h-[14.25rem] md:h-[31.8125rem] lg:h-[41.0625rem] w-1/2 rounded-[0.25rem] object-cover object-center"
      />
    </div>
  );
};

export default AboutSection;
