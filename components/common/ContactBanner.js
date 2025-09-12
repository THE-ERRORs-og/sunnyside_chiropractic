import React from "react";
import MainButton from "./MainButton";
import ContactButton from "./ContactButton";

const ContactBanner = () => {
  return (
    <div className="px">
      <div className="md:mt-32 mb-14 relative h-[21.3125rem] lg:h-[25.6875rem] w-full bg-[linear-gradient(90deg,#53683F_53.4%,#7F9967_73.43%,#546940_91.91%)] rounded-[0.23113rem_1.38669rem] ">
        <img
          src="https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/contact-banner-img.webp"
          className="absolute bottom-0 right-0 hidden md:flex md:w-[29.35163rem] md:h-[25.16638rem] lg:w-[37.8125rem] lg:h-[31.5rem] flex-shrink-0 object-cover [object-position:100%_45%] scale-x-[-1]"
          alt="contact-banner"
        ></img>
        <div className="rounded-[0.23113rem_1.38669rem] flex flex-col items-start justify-center space-y-4 w-full h-full px md:pl-4 lg:px md:w-[51%] lg:w-[60%]">
          <h1 className="banner-heading text-white">
            Align Your <span className="text-secondary">Health</span> Transform
            Your Life
          </h1>
          <p className="text-[#CACACA] banner-content">
          Discover natural, lasting relief through personalized chiropractic care. Our
          goal is to restore balance, relieve pain, and empower you to live a healthier, more vibrant life.
          </p>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
