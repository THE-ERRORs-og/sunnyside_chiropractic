import React from "react";
import BlogList from "@/components/blog/BlogList";
import BlogCard from "@/components/blog/BlogCard";

const Blog = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Blog Page</h1>
      <BlogList />
      <BlogCard />
    </>
  );
};

export default Blog;