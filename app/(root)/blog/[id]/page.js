import React from "react";
import BlogPost from "@/components/blog/BlogPost";
import MoreArticles from "@/components/blog/MoreArticles";

const BlogPostPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">BlogPost Page</h1>
      <BlogPost />
      <MoreArticles />
    </>
  );
};

export default BlogPostPage;