import React, { useMemo } from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = () => {
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

  // Generate random widths for each testimonial
  const randomWidths = useMemo(() => {
    const widths = [];
    for (let i = 0; i < 8; i++) {
      // Random width between 80% and 95%
      const width = Math.floor(Math.random() * 16) + 80;
      widths.push(width);
    }
    return widths;
  }, []);

  // Divide testimonials into two columns
  const leftColumn = testimonials.slice(0, 4);
  const rightColumn = testimonials.slice(4, 8);

  return (
    <div className="mx-auto w-full px-4 md:px-6 lg:px-0 max-w-[960px] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        <div className="flex flex-col gap-8">
          {leftColumn.map((testimonial, index) => (
            <div key={`left-${index}`} className="w-full">
              <div
                className="bg-white p-4 rounded-xl border border-[#E8E8E8] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full md:random-width"
                style={{
                  "--random-width": `${randomWidths[index]}%`,
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8 mt-0 md:mt-6">
          {rightColumn.map((testimonial, index) => (
            <div key={`right-${index}`} className="w-full">
              <div
                className="bg-white p-4 rounded-xl border border-[#E8E8E8] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full md:random-width"
                style={{
                  "--random-width": `${randomWidths[index + 4]}%`,
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
