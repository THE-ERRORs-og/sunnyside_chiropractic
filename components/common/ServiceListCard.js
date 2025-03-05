import React from "react";

const ServiceListCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-[1.375rem] hover:border-[0.24px] border-black hover:shadow-2xl rounded-xl  w-[calc(50%-9px)] sm:w-[calc(50%-21px)] lg:w-[calc(25%-31.5px)] ">
      <img
        src="/service-img/service-1.png"
        className="w-[82px] h-[82px]"
        alt="Service"
      />
      <h3 className="font-libre-bold text-[0.75rem] leading-[1.25rem] md:text-[1.5rem] md:leading-[3.125rem] text-center">
        Chiropractic Care
      </h3>
      <p className="text-base text-[0.5rem] leading-[1rem] md:text-[1rem] md:leading-[1.75rem] text-center text-[#666666]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </p>
    </div>
  );
};
export default ServiceListCard;
