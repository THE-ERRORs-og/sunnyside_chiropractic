import React from "react";
import placeholderIcon from "@/public/about-img/medical_hand.svg";
import Image from "next/image";

const CareProcess = () => {
  const careSteps = [
    {
      title: "Comprehensive Consultation",
      description:
        "We begin with a detailed assessment to understand your health history, lifestyle, and specific concerns.",
      img: placeholderIcon,
    },
    {
      title: "Thorough Examination",
      description:
        "Our team performs physical and diagnostic evaluations to identify the root cause of your condition.",
      img: placeholderIcon,
    },
    {
      title: "Personalized Treatment Plan",
      description:
        "We design a tailored care program that may include chiropractic adjustments, therapies, and wellness guidance.",
      img: placeholderIcon,
    },
    {
      title: "Ongoing Support & Progress Tracking",
      description:
        "We monitor your recovery, adjust treatments as needed, and provide tools to help you maintain long-term health",
      img: placeholderIcon,
    },
  ];

  return (
    <div className="main-container">
      <h2 className="sub-heading mb-8 !text-black">
        How we will take <span className="text-secondary">care</span> of you?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {careSteps.map((step, index) => {
          let shadowClass = "";
          const position = index % 4;

          if (position === 0) {
            shadowClass = "shadow-[-17px_10px_36px_0px_rgba(83,104,63,0.25)]";
          } else if (
            position === 1 ||
            (position === 2 && careSteps.length % 4 === 3)
          ) {
            shadowClass = "shadow-[0px_10px_36px_0px_rgba(83,104,63,0.25)]";
          } else if (
            position === 3 ||
            (position === 2 && careSteps.length % 4 !== 3)
          ) {
            shadowClass = "shadow-[17px_10px_36px_0px_rgba(83,104,63,0.25)]";
          }

          return (
            <div
              key={index}
              className={`p-6 border-[0.12px] rounded-xl ${shadowClass} bg-white flex flex-col items-center text-center h-full hover:shadow-none transition duration-300 ease-in-out`}
            >
              <Image
                src={step.img}
                alt={step.title}
                width={80}
                height={80}
                className="w-12 md:w-16 lg:w-20 mb-4"
              />
              <h5 className=" text-primary mb-2">{step.title}</h5>
              <p className="text-center">{step.description}</p>
            </div>
          );
        })}
      </div>

      <div className="hidden lg:flex items-center justify-center w-full">
        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute top-1/2 h-6 bg-primary transform -translate-y-1/2 w-3/4"></div>
          <div className="relative w-full z-10 grid grid-cols-4 place-items-center">
            {[1, 2, 3, 4].map((step) => (
              <h5
                key={step}
                className="flex items-center justify-center w-20 h-20 bg-secondary rounded-full"
              >
                {step}
              </h5>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareProcess;
