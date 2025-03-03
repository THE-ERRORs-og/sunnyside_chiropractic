import React from "react";

const ServiceListCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-[1.375rem] border-[0.24px] border-black rounded-xl w-full sm:w-[calc(50%-21px)] lg:w-[calc(25%-31.5px)]">
      <img
        src="/service-img/service-1.png"
        className="w-[82px] h-[82px]"
        alt="Service"
      />
      <h3 className="font-libre-bold text-2xl text-center">Chiropractic Care</h3>
      <p className="text-base text-center text-[#666666]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </p>
    </div>
  );
};
export default ServiceListCard;