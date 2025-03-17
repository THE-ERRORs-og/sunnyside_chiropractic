import React from "react";

const TeamCard = ({name , img}) => {
  return (
    <div className=" w-[calc(50%-9px)] sm:w-[calc(50%-21px)] lg:w-[calc(25%-31.5px)] rounded-xl overflow-hidden">
      <div className="relative bg-[#0000000D] hover:bg-white transition-smooth">
        <img
          src={img}
          className="w-full h-full translate-y-14  object-cover rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-1 md:hover:-translate-y-2  lg:hover:-translate-y-3"
          alt="Team"
        />

        {/* Name Section */}
        <h5 className="absolute bottom-0 w-full h-[14.4%] flex items-center justify-center bg-[#546940] text-white font-libre-bold text-[0.75rem] leading-[1.25rem] md:text-[1.5rem] md:leading-[2.25rem]  rounded-b-xl">
          {name}
        </h5>
      </div>
      {/* Image with hover effect */}
    </div>
  );
};

export default TeamCard;
