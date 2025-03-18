import React from "react";
import ContactForm from "@/components/contact/ContactForm";

const ContactUs = () => {
  return (
    <>
      <div className="header-container flex flex-col items-center text-center">
        <h1 className="sub-heading mb-4">
          Give us opportunity to{" "}
          <span className="text-secondary">serve you</span>
        </h1>
        <p className="font-poppins">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida
          quam hac risus pharetra elementum malesuada finibus? Varius augue
          egestas tempor consectetur montes morbi senectus
        </p>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactUs;