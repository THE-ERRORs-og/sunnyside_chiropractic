import Image from "next/image";
import Link from "next/link";
import React from "react";

const HorizontalBlogCard = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className="p-4 flex gap-2 rounded-2xl shadow-lg">
      <Image
        src={blog.featuredImage}
        alt={blog.title}
        width={150}
        height={150}
        className="w-[30vw] md:w-2/5 md:h-[50vh] aspect-square object-cover rounded-lg flex-shrink-0"
        unoptimized
      />
      <div className="flex flex-col place-content-around md:ml-10 items-start text-start">
        <h1 className="font-libre-regular text-base md:text-2xl lg:text-4xl text-primary">
          {blog.title}
        </h1>
        <p className="text-gray-600 line-clamp-3 my-2">{blog.excerpt}</p>
        <div className="md:flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-2 font-libre-regular hidden">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>{blog.publishDate}</span>
          <span>•</span>
          <span>{blog.category}</span>
        </div>
        <div className="flex gap-3 font-semibold md:text-base lg:text-xl text-[12px] font-poppins">
          <h2 className="text-primary">{blog.readTime}</h2>
          <h2>•</h2>
          <Link href={`/blog/${blog.slug}`} className="text-primary">
            <h2 className="cursor-pointer hover:font-bold">Read Now</h2>
          </Link>
          <h2>→</h2>
        </div>
      </div>
    </div>
  );
};

const VerticalBlogCard = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className="p-4 grid grid-row-2 rounded-2xl shadow-lg w-[80vw] md:w-[430px] flex-shrink-0">
      <Image
        src={blog.featuredImage}
        alt={blog.title}
        width={320}
        height={192}
        className="w-[80vw] md:w-full h-48 object-cover rounded-lg"
        unoptimized
      />
      <div className="flex flex-col place-content-around md:m-3 items-start text-start gap-4">
        <h1 className="font-libre-regular text-lg md:text-2xl lg:text-4xl text-primary">
          {blog.title}
        </h1>
        <p className="text-gray-600 line-clamp-3">{blog.excerpt}</p>
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-2 font-libre-regular ">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>{blog.publishDate}</span>
        </div>
        <div className="flex gap-3 font-semibold md:text-base lg:text-xl text-base font-poppins">
          <h2 className="text-primary">{blog.readTime}</h2>
          <h2>•</h2>
          <Link href={`/blog/${blog.slug}`} className="text-primary">
            <h2 className="cursor-pointer hover:font-bold">Read Now</h2>
          </Link>
          <h2>→</h2>
        </div>
      </div>
    </div>
  );
};

export { HorizontalBlogCard, VerticalBlogCard };
