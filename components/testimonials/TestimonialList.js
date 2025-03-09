import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = () => {
  const testimonials = [
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-5 gap-6">
      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
        {testimonials.map((testimonial, index) => {
          let colSpan = Math.random() > 0.5 ? 2 : 1;
          if (index % 2 === 1) {
            colSpan = 3 - colSpan;
          }

          return (
            <div
              key={index}
              className={`bg-white p-6 col-span-${colSpan} rounded-2xl shadow-lg border border-gray-200`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialList;
