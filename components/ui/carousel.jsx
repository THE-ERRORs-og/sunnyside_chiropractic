"use client";
import { useState, useRef, useId, useEffect } from "react";
import Reviews from "../testimonials/Reviews";

const Slide = ({ index, current, handleSlideClick, testimonial }) => {
  const slideRef = useRef(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();


  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  const { img, name, location, rating, review } = testimonial;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };

      handleResize(); // Set initial state
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out slider-container mx-[1vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        style={{
          transform:
            current !== index
              ? "scale(0.7) translateY(-80px)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className={`slider-card-container ${
            current === index ? "bg-white" : "bg-primary opacity-75"
          } translate-y-12 md:translate-y-0`}
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : isMobile
                ? "translateY(50px)"
                : "none",
          }}
        >
          <div className="flex items-center justify-start space-x-2">
            <img
              src={img}
              alt="profile"
              onLoad={imageLoaded}
              loading="eager"
              decoding="sync"
              className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] lg:w-[4.5rem] lg:h-[4.5rem] border-2 rounded-full border-black"
            />
            <div className="justify-start items-center">
              <Reviews rating={rating} width={13} height={15}/>
              <h3 className="text-[0.8rem] md:text-[1.5rem] md:leading-[1.875rem] lg:text-[1.79175rem] text-black font-semibold">{name}</h3>
              <p className="text-[0.5rem] text-[#666666] md:text-[1rem] text-start">{location}</p>
            </div>
          </div>
          <p className="review-content">{review}</p>
        </div>

        {/* {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}  */}
      </li>
    </div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className={`w-[2.6875rem] h-[2.6875rem] md:w-[4.6875rem] md:h-[4.6875rem] flex items-center mx-2 justify-center bg-primary border-3 border-transparent rounded-full focus:bg-secondary hover:bg-secondary focus:outline-none  transition duration-200 ${
        type === "previous" ? "" : "rotate-[180deg]"
      }`}
      title={title}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        className="text-white h-[1.28925rem] w-[1.28925rem] md:h-[2.28925rem] md:w-[2.28925rem]"
      >
        <path
          d="M16.4652 7.81689L6.29075 18.5M6.29075 18.5L16.4652 29.1832M6.29075 18.5L30.7094 18.5"
          stroke="#F5EDE1"
          strokeWidth="1.74419"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export function Carousel({ testimonials }) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? testimonials.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === testimonials.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative slider-container mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-1vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / testimonials.length)}%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Slide
            key={index}
            testimonial={testimonial}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      <div className="absolute flex justify-around w-full top-[calc(100%+0.5rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
