import React from "react";
import placeholderIcon from "@/public/about-img/medical_hand.svg";
import Image from "next/image";

const CareProcess = () => {
  const careSteps = [
    {
      title: "Chiropractic Care",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum odor amet, consectetuer adipiscing elit.",
      img: placeholderIcon,
    },
    {
      title: "Physical Therapy",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum odor amet, consectetuer adipiscing elit.",
      img: placeholderIcon,
    },
    {
      title: "Massage Therapy",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum odor amet, consectetuer adipiscing elit.",
      img: placeholderIcon,
    },
    {
      title: "Acupuncture",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum odor amet, consectetuer adipiscing elit.",
      img: placeholderIcon,
    },
  ];

  return (
    <div className="main-container">
      <h2 className="sub-heading mb-8 !text-black">
        How we will take <span className="text-secondary">care</span> of you?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {careSteps.map((step, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-[0px_10px_36px_0px_rgba(83,104,63,0.25)] bg-white flex flex-col items-center text-center h-full hover:shadow-none transition duration-300 ease-in-out"
          >
            <Image
              src={step.img}
              alt={step.title}
              width={80}
              height={80}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-lg font-bold text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareProcess;
