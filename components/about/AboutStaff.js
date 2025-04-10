import { staffMembers } from "@/lib/data";
import Image from "next/image";

const AboutStaff = () => {
  return (
    <div className="main-container">
      <h2 className="sub-heading mb-4">
        About the <span className="text-secondary">Staff</span>
      </h2>
      <div className="space-y-6">
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index & 1 && "md:flex-row-reverse"
            } items-stretch justify-between gap-4`}
          >
            <div className="flex-1 text-justify">
              <h3 className="font-[700]">
                {staff.name}
                {", "}
                <span className="text-[0.5rem] md:text-[0.75rem] lg:text-[1.75rem] font-medium text-gray-500">
                  {staff.role}
                </span>
              </h3>
              <h6 className="whitespace-pre-line">{staff.description}</h6>
            </div>
            <div className="flex items-center justify-center p-8 bg-ascent w-full md:w-1/4 rounded-bl-[3.125rem] rounded-tr-[3.125rem]">
              <img
                src={staff.image}
                alt={staff.name}
                className=" h-full rounded-bl-[1.125rem] rounded-tr-[1.125rem]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStaff;
