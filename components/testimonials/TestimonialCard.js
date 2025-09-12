import React from "react";
import Image from "next/image";
import Reviews from "./Reviews";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="space-y-3 font-poppins">
      <div className="flex items-start gap-3">
        <Image
          src={testimonial.img}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          width={48}
          height={48}
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-[16px] font-semibold text-gray-900 leading-tight">
            {testimonial.name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-[12px] text-gray-600">{testimonial.location}</p>
            <Reviews rating={testimonial.rating} width={12} height={12} />
          </div>
        </div>
      </div>
      <p className="text-[13px] text-gray-700 leading-[1.7]">
        {testimonial.review}
      </p>
    </div>
  );
};

export default TestimonialCard;
