"use client";
import { AlignJustify, Cross, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  // Define routes with different text colors
  const blackTextRoutes = [
    "/about-us",
    "/testimonials",
    "/service",
    "/patients",
    "/blog",
  ];
  const whiteTextRoutes = ["/"];

  // Determine text color based on route
  const textColor = blackTextRoutes.includes(pathname)
    ? "text-black"
    : "text-white";

  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  const menuDrawerRef = useRef(null); // Reference for mobile menu drawer

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Services", path: "/service" },
    { name: "For patients", path: "/patients" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <header className="flex absolute z-10 w-screen justify-between items-center px text-black font-normal text-xl">
        <img src="/logo/brand-logo.png" alt="logo" className="logo-img" />
        <div className="hidden lg:flex justify-end space-x-6  w-full ">
          {menuItems.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className={`${textColor} text-lg hover:text-secondary transition duration-300 ease-in-out`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* tab and mobile */}
        <div className="flex lg:hidden bg-[#546940] p-2 rounded-xl">
          <AlignJustify
            onClick={toggleMenu}
            className=" justify-end space-x-10 text-white "
          />
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-full z-50 flex flex-col items-start pl-8 gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
          ref={menuDrawerRef}
        >
          <button
            aria-label="Close menu"
            aria-expanded={isOpen}
            className="fixed right-4 top-3 block bg-[#F5EDE1] p-2 rounded-xl lg:hidden"
            onClick={toggleMenu}
          >
            <X className=" justify-end text-primary " />
          </button>

          {menuItems.map((item) => (
            <div
              className="flex space-x-10 pt-2 mt-2 w-full p-[0.625rem] items-center justify-center rounded-[0.75rem] bg-primary text-white"
              key={item.name}
            >
              <Link
                href={item.path}
                onClick={toggleMenu}
                className="text-white text-[1.5rem] font-normal loading-[2rem] transition duration-300"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
