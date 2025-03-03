// import React from "react";

// const TeamCard = () => {
//   return (
//     <div className="relative bg-[#00000059] rounded-xl w-full sm:w-[calc(50%-21px)] lg:w-[calc(25%-31.5px)] rounded-xl">
//       <img
//         src="/team-img/team-1.png"
//         className="w-[79%] h-[100%] object-fit rounded-xl opacity-70 hover:opacity-100 hover:scale-y-125 transition-all duration-300"
//         alt="Team"
//       />
//       <h5 className="absolute bottom-0  rounded-b-xl w-full h-[14.4%] flex items-center justify-center bg-[#546940] text-white font-libre-bold text-2xl ">Dr. John Doe</h5>
//     </div>
//   );
// };

// export default TeamCard;


import React from "react";

const TeamCard = () => {
  return (
    <div className="relative w-full sm:w-[calc(50%-21px)] lg:w-[calc(25%-31.5px)] rounded-xl overflow-hidden">
      {/* Image with hover effect */}
      <img
        src="/team-img/team-1.png"
        className="w-full h-full object-cover rounded-xl transition-all ease-in-out duration-300 opacity-70 hover:opacity-100 hover:scale-110"
        alt="Team"
      />

      {/* Name Section */}
      <h5 className="absolute bottom-0 w-full h-[14.4%] flex items-center justify-center bg-[#546940] text-white font-libre-bold text-2xl rounded-b-xl">
        Dr. John Doe
      </h5>
    </div>
  );
};

export default TeamCard;
