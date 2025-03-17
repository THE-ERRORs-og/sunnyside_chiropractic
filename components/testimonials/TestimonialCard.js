import React from "react";
import Image from "next/image";
import Reviews from "./Reviews";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-4">
      {" "}
      <div className="flex items-center space-x-4">
        <Image
          src={testimonial.img}
          alt="profile"
          className="w-12 h-12 rounded-full border"
          width={48}
          height={48}
        />
        <div>
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
          <Reviews rating={testimonial.rating} width={15}  />
        </div>
      </div>
      <p className="mt-4 text-gray-700">{testimonial.review}</p>
    </div>
  );
};

export default TestimonialCard;
