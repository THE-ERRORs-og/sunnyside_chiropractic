"use client";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

const blogContent = {
  title: "How chiropractic therapy",
  highlight: "heals",
  afterHighlight: "you?",
  description:
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus",
  sections: [
    {
      id: "section1",
      title: "Understanding the Basics",
      content:
        "Chiropractic care involves the diagnosis and treatment of neuromuscular disorders. It primarily deals with manual adjustment and manipulation of the spine.",
    },
    {
      id: "section2",
      title: "How It Works",
      content:
        "The therapy aims to reduce pain and improve the functionality of patients. Chiropractors also educate patients on how they can account for their own health.",
    },
    {
      id: "section3",
      title: "Benefits of Chiropractic Therapy",
      content:
        "Chiropractic adjustments can help with back pain, neck pain, and headaches. It can also improve posture and enhance overall wellness.",
    },
    {
      id: "section4",
      title: "Is It Right for You?",
      content:
        "It is a non-invasive, drug-free approach. Consult with a chiropractor to see if the therapy aligns with your personal health needs.",
    },
  ],
};

const BlogPostPage = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = blogContent.sections.map((section) => {
        const element = document.getElementById(section.id);
        return element ? element.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + 100;
      const index = offsets.findIndex(
        (offset, i) =>
          scrollPosition >= offset &&
          (i === blogContent.sections.length - 1 ||
            scrollPosition < offsets[i + 1])
      );

      if (index !== -1) setActiveSection(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (targetY, duration = 200) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);
      window.scrollTo(0, startY + diff * percent);
      if (time < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div className="header-container flex flex-col gap-5">
      <div className="items-center text-center flex flex-col">
        <h1 className="font-libre-regular text-lg md:text-2xl lg:text-4xl text-primary mb-4">
          {blogContent.title}{" "}
          <span className="text-secondary">{blogContent.highlight}</span>{" "}
          {blogContent.afterHighlight}
        </h1>
        <p className="font-poppins max-w-3xl">{blogContent.description}</p>
      </div>

      <div className="flex place-content-center">
        <img
          src={"https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/about-img1.webp"}
          alt=""
          className="rounded-2xl w-[80vw] h-[80vh] shadow-2xl"
        />
      </div>

      <div className="flex max-w-5xl mx-auto py-10 font-libre-regular">
        <aside className={"w-1/4 sticky top-10  flex gap-4 items-start"} style={{ height: `${(blogContent.sections.length)*40}px` }}>
          <div className="relative w-2 bg-gray-300 rounded-full h-full mt-2">
            <div
              className="absolute left-0 w-2 h-[25%] bg-green-600 rounded-full transition-all duration-300"
              style={{ top: `${(activeSection / blogContent.sections.length) * 100}%` }}
            />
          </div>

          <div className="flex flex-col gap-4 mt-2">
            {blogContent.sections.map((section, index) => (
              <button
                key={section.id}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(section.id);
                  if (target) {
                    const offsetTop =
                      target.getBoundingClientRect().top + window.scrollY - 100;
                    smoothScrollTo(offsetTop);
                    setActiveSection(index);
                  }
                }}
                className={`text-left text-sm transition-colors duration-300 ${
                  index === activeSection
                    ? "text-green-700 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        <main className="w-3/4 pl-10">
          {blogContent.sections.map((section, index) => (
            <motion.section
              id={section.id}
              key={section.id}
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={
                activeSection === index
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0.6, y: 10 }
              }
            >
              <h2 className="text-2xl text-green-700 font-semibold mb-4 mt-4">
                {section.title}
              </h2>
              <p className="text-gray-600">{section.content}</p>
            </motion.section>
          ))}
        </main>
      </div>

    </div>
  );
};

export default BlogPostPage;
