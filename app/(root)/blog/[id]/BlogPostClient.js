"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactBanner from "@/components/common/ContactBanner";

const BlogPostClient = ({ blog }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = blog.content.sections.map((section) => {
        const element = document.getElementById(`section-${section.id}`);
        return element ? element.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + 100;
      const index = offsets.findIndex(
        (offset, i) =>
          scrollPosition >= offset &&
          (i === blog.content.sections.length - 1 ||
            scrollPosition < offsets[i + 1])
      );

      if (index !== -1) setActiveSection(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog.content.sections]);

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

  // Helper function to render formatted content
  const renderContent = (content) => {
    return content.split("\n\n").map((paragraph, index) => {
      // Handle bold text marked with **
      const formattedParagraph = paragraph.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
      );

      return (
        <p
          key={index}
          className="text-gray-700 mb-4 leading-relaxed text-base lg:text-lg"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        />
      );
    });
  };

  return (
    <div className="header-container flex flex-col gap-8">
      {/* Header Section with improved semantic markup */}
      <header className="items-center text-center flex flex-col">
        <h1 className="font-libre-regular text-2xl md:text-3xl lg:text-5xl text-primary mb-4">
          {blog.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span itemProp="author">By {blog.author}</span>
          <span>•</span>
          <time dateTime={blog.publishDate} itemProp="datePublished">
            {blog.publishDate}
          </time>
          <span>•</span>
          <span>{blog.readTime}</span>
          <span>•</span>
          <span
            className="bg-primary text-white px-2 py-1 rounded"
            itemProp="articleSection"
          >
            {blog.category}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              itemProp="keywords"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Featured Image with proper alt text */}
      <div className="flex place-content-center">
        <img
          src={blog.featuredImage}
          alt={`${blog.title} - Expert chiropractic advice from Dr. Thomas Potigian in Fresno, CA`}
          className="rounded-2xl w-[80vw] h-[60vh] object-cover shadow-2xl"
          itemProp="image"
        />
      </div>

      {/* Introduction with article body markup */}
      <div className="max-w-4xl mx-auto" itemProp="articleBody">
        <h2 className="text-3xl font-libre-regular text-primary mb-6">
          {blog.content.introduction.title}
        </h2>
        <div className="text-xl md:text-lg lg:text-xl leading-relaxed text-gray-700">
          {renderContent(blog.content.introduction.content)}
        </div>
      </div>

      {/* Main Content with Navigation */}
      <div className="flex max-w-6xl mx-auto py-10 font-libre-regular">
        <aside
          className="w-1/4 sticky top-10 gap-4 items-start hidden lg:flex"
          style={{ height: `${blog.content.sections.length * 50}px` }}
        >
          <div className="relative w-2 bg-gray-300 rounded-full h-full mt-2">
            <div
              className="absolute left-0 w-2 bg-primary rounded-full transition-all duration-300"
              style={{
                top: `${(activeSection / blog.content.sections.length) * 100}%`,
                height: `${100 / blog.content.sections.length}%`,
              }}
            />
          </div>

          <div className="flex flex-col gap-4 mt-2 ">
            {blog.content.sections.map((section, index) => (
              <button
                key={section.id}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(
                    `section-${section.id}`
                  );
                  if (target) {
                    const offsetTop =
                      target.getBoundingClientRect().top + window.scrollY - 100;
                    smoothScrollTo(offsetTop);
                    setActiveSection(index);
                  }
                }}
                className={`text-left text-sm transition-colors duration-300 hover:text-primary ${
                  index === activeSection
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        <main className="md:w-3/4 md:pl-10">
          {blog.content.sections.map((section, index) => (
            <motion.section
              id={`section-${section.id}`}
              key={section.id}
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={
                activeSection === index
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0.8, y: 10 }
              }
            >
              <h2 className="text-2xl text-primary font-semibold mb-6">
                {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed text-xl md:text-base lg:text-lg">
                {renderContent(section.content)}
              </div>
            </motion.section>
          ))}

          {/* Conclusion */}
          <motion.section
            className="mb-12 bg-gray-50 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl text-primary font-semibold mb-6">
              {blog.content.conclusion.title}
            </h2>
            <div className="text-gray-700 leading-relaxed text-xl md:text-base lg:text-lg">
              {renderContent(blog.content.conclusion.content)}
            </div>
          </motion.section>
        </main>
      </div>
      <ContactBanner />
    </div>
  );
};

export default BlogPostClient;
