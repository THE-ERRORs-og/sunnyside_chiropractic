import React from "react";
import { Carousel } from "../ui/carousel";

const TestimonialSwiper = () => {
  const testimonials = [
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits,  office personnel are very courteous  and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
    {
      name: "DaGunny Rivera",
      location: "California, USA",
      review:
        "I've noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 4.5,
    },
  ];

  return (
    <div className="my px">
      <div className="flex mb-[1.375rem] items-center justify-center sm:justify-between text-[8px] md:text-[14px]">
        <h2 className="sub-heading">
          What our <span className="text-secondary">Patients</span> say
        </h2>
        <h5 className="text-[1.4em] hidden sm:flex text-primary font-libre-bold">
          We value every patient
        </h5>
      </div>
      <div className="relative pb-[4rem] md:pb-[6rem] md:pt-[3rem] overflow-hidden ">
        <Carousel testimonials={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialSwiper;
