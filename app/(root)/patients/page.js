import React from "react";
import PaymentOptions from "@/components/payment/PaymentOptions";
import ContactBanner from "@/components/common/ContactBanner";

const PaymentMethods = () => {
  return (
    <>
      <div className="header-container flex flex-col items-center justify-center space-y-8">
        <h1 className="sub-heading text-center">
          Our Payment <span className="text-secondary">Methods</span>
        </h1>
        <h6 className="text-center">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo <br />
          gravida quam hac risus pharetra elementum malesuada finibus? <br />
          Varius augue egestas tempor consectetur montes morbi senectus
        </h6>
      </div>

      <PaymentOptions />
      <ContactBanner />
    </>
  );
};

export default PaymentMethods;
