import React from "react";
import BlogList from "@/components/blog/BlogList";
import BlogCard, { HorizontalBlogCard, VerticalBlogCard } from "@/components/blog/BlogCard";

const Blog = () => {
  return (
    <div className="header-container flex flex-col gap-5">
      <div className="items-center text-center flex flex-col">
        <h1 className="sub-heading mb-3">
          Welcome to <span className="text-secondary">Our Blog</span>
        </h1>
        <p className="font-poppins max-w-3xl">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida
          quam hac risus pharetra elementum malesuada finibus? Varius augue
          egestas tempor consectetur montes morbi senectus
        </p>
      </div>

      <HorizontalBlogCard />

      <div className="my-5 w-full">
        <h1 className="blog-heading text-start">
          Top Picks for You
        </h1>
        <div className="flex gap-2">
          <VerticalBlogCard />
          {/* <VerticalBlogCard /> */}
          <VerticalBlogCard />
        </div>
      </div>

      <div className="my-5">
        <h1 className="blog-heading text-start">
          More for You
        </h1>
        <div className="flex gap-2 flex-col">
          <HorizontalBlogCard />
          <HorizontalBlogCard />
          <HorizontalBlogCard />
        </div>
      </div>

      <BlogList />
    </div>
  );
};

export default Blog;
