import { doctorData } from "@/lib/data";
import Image from "next/image";

const AboutDoctor = () => {
  return (
    <div className="main-container">
      <h2 className="sub-heading mb-4">
        About the <span className="text-secondary">Doctor</span>
      </h2>
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-4">
        <div className="flex-1 text-justify">
          <h3 className="mb-4">{doctorData.name}</h3>
          <h6 className="">{doctorData.description}</h6>
        </div>
        <div className="flex items-center justify-center p-8 bg-ascent w-full md:w-1/4 rounded-bl-[3.125rem] rounded-tr-[3.125rem]">
          <Image
            src={doctorData.image}
            alt={doctorData.name}
            className=" h-full rounded-bl-[1.125rem] rounded-tr-[1.125rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;
