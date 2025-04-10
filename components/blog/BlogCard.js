import Image from "next/image";
import Link from "next/link";
import React from "react";

const HorizontalBlogCard = () => {
  return (
    <div className="p-4 grid grid-cols-2 rounded-2xl shadow-lg">
      <img
        src={
          "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/about-img1.webp"
        }
        alt=""
        className="w-[40vw] h-[50vh]"
      />
      <div className="flex flex-col place-content-around ml-10 items-start text-start">
        <h1 className="font-libre-regular text-lg md:text-2xl lg:text-4xl text-primary">
          {" "}
          How chiropractic therapy heals you?
        </h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida
          quam hac risus pharetra elementum malesuada finibus? Varius augue
          egestas tempor consectetur montes morbi senectus
        </p>
        <div className="flex gap-3 font-semibold md:text-base lg:text-xl text-[8px] font-poppins">
          <h2 className="text-primary">4 min read</h2>
          {/* black dot */}
          <h2>•</h2>

          <Link href="/blog/1" className="text-primary">
            <h2 className="cursor-pointer hover:font-bold">Read Now</h2>
          </Link>

          {/* Arrow */}
          <h2>→</h2>
        </div>
      </div>
    </div>
  );
};

const VerticalBlogCard = () => {
  return (
    <div className="p-4 grid grid-row-2 rounded-2xl shadow-lg w-[30vw]">
      <img
        src={
          "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/about-img1.webp"
        }
        alt=""
        className="w-[80vw]"
      />
      <div className="flex flex-col place-content-around m-3 items-start text-start gap-4">
        <h1 className="font-libre-regular text-lg md:text-2xl lg:text-4xl  text-primary">
          {" "}
          How chiropractic therapy heals you?
        </h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida
          quam hac risus pharetra elementum malesuada finibus? Varius augue
          egestas tempor consectetur montes morbi senectus
        </p>
        <div className="flex gap-3 font-semibold font-poppins md:text-base lg:text-xl text-[8px]">
          <h2 className="text-primary">4 min read</h2>
          {/* black dot */}
          <h2>•</h2>
          <Link href="/blog/1" className="text-primary">
            <h2 className="cursor-pointer hover:font-bold">Read Now</h2>
          </Link>

          {/* Arrow */}
          <h2>→</h2>
        </div>
      </div>
    </div>
  );
};

export { HorizontalBlogCard, VerticalBlogCard };
