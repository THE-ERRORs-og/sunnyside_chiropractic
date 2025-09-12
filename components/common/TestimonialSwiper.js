import React from "react";
import { Carousel } from "../ui/carousel";

const TestimonialSwiper = () => {
  const testimonials = [
    {
      name: "Kathy Louanglath",
      location: "California, USA",
      review:
        "I’ve been seeing Thomas M. Potiguan for 2 months and the difference in my pain and mobility has been amazing. They take the time to listen, explain each adjustment, and make sure I’m comfortable throughout the process. The office staff is friendly and professional, and I never feel rushed. My back and neck feel so much better, and I leave every visit feeling aligned and refreshed. Highly recommend to anyone looking for a caring and skilled chiropractor.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 5,
    },
    {
      name: "Aileen Clemente",
      location: "California, USA",
      review:
        "I came in to find a chiropractor that is near my work and home. Impressed by Dr that educated me about chiropractic and assessment of my current posture. With just about a month of treatment. No more headaches when waking up the morning, which i thought caused by monthly periods. Overall a better quality in life. Who would have thought that sitting in the office for year can cause the uneven hip bones and crooked spine. Which can eventually end up with surgery. With a little but if education, awareness and treatment can avoid all that future major bone problems.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 5,
    },
    {
      name: "Monique Martinez",
      location: "Fresno Ca , USA",
      review:
        "I’m trying to lose weight but every time I walked I was in pain. My back really was beginning to prevent me from working out. I decided to take the chance and try Sunnyside. I am half way through my schedule services and I can gladly say that I can now go for a 3 mile walk without severe back pain. I am practically headache free (I suffered from so many of them), and I can sleep better. I didn’t think that chiropractic treatment was necessary for my weight-loss journey until now. I highly recommend it, especially Sunnyside Wellness & Chiropractic Center. They are fast, efficient, careful, and extremely kind. Best decision I have made for myself.",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjWf4YF-DOU5fVzSlarVPNUnNJmeNsFuAXhXYn5kszFMAA3pP14=w162-h162-p-rp-mo-br100",
      rating: 5,
    },
    {
      name: "Damar Randle",
      location: "California, USA",
      review:
        "Started Treatment here in January after two back to back car accidents. The right side of my neck and right shoulder hurt so bad, I couldn't lift my arm or turn my neck. Today, I am back to normal with full range of motion! That is because of the awesome work that Dr. Potigian does! His team is wonderful and always greets with a warm smile!",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjUBbExlwaiyqcXaT3DjN-ewPURgUxqWHA90rLEwY6weS2RO6VfW=w162-h162-p-rp-mo-br100",
      rating: 5,
    },
    {
      name: "Beatriz Dueñas",
      location: "California, USA",
      review:
        "Great experience. Used to get bad headaches all the time. I would wake up having slept so uncomfortably and my back pain was something I came to get myself seen for and I will say coming here helped. Thank you!",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjWOWBc0PSu3IopQBbBkemviKxedR5RZ5dmM6j5AJJu_wSKy4Wn0=w162-h162-p-rp-mo-br100",
      rating: 5,
    },
    {
      name: "Shelley Bauers",
      location: "California, USA",
      review:
        "Dr. Potigian is excellent. He has a system that has worked wonders on my pain. I’ve been to a number of chiropractors over the years and he is by far the best, the only one to have worked on my entire problem instead of focusing on just one thing.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      rating: 5,
    },
    {
      name: "Yvonne Herrera",
      location: "California, USA",
      review:
        "Been coming to Sunnyside Wellsness and Chiropractor and they are all very welcoming and kind! Every visit I leave feeling better and pain free. As a singer posture is very important and even a new mother maintaining posture. They are always accommodating with schedule and kind. Highly recommended.",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjUifwe_EETuCYkWbFe5XD_8jAcBZa7-PDJqAMaV55e5z7BC7ME=w162-h162-p-rp-mo-br100",
      rating: 5,
    },
    {
      name: "Kathy Tillmon",
      location: "California, USA",
      review:
        "I have been going here for a few months for back and neck pain and I’m am seeing improvement I would definitely recommend friendly staff and everything is always explained to you",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjWtcLrsK6ygi2d3daBDP_9BcXCsiggwG3BhDdR3eo0vO-WKp6tx=w162-h162-p-rp-mo-br100",
      rating: 5,
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
