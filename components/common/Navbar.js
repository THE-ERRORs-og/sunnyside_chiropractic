import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <header className="flex absolute z-10 w-screen justify-between items-center px text-black font-normal text-xl">
        <img
          src="/logo/brand-logo.png"
          alt="logo"
          className="logo-img"
        />
        <div className="hidden lg:flex justify-end space-x-6  w-full ">
          <Link href="/" className="text-lg text-white hover:text-secondary  transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/about-us" className="text-lg text-white hover:text-secondary  transition duration-300 ease-in-out">
            About Us
          </Link>
          <Link href="/service" className="text-lg text-white hover:text-secondary  transition duration-300 ease-in-out">
            Our Services
          </Link>
          <Link href="/patients" className="text-lg text-white hover:text-secondary  transition duration-300 ease-in-out">
            For patients
          </Link>
          <Link href="/testimonials" className="text-lg text-white hover:text-secondary  transition duration-300 ease-in-out">
            Testimonials
          </Link>
          <Link href="/blogs" className="text-lg text-white hover:text-secondary  transition duration-300 ease-in-out">
            Blogs
          </Link>
        </div>
        <div className="flex lg:hidden bg-[#546940] p-2 rounded-xl">
          <AlignJustify className=" justify-end space-x-10 text-white " />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
