"use client";

import { useRouter } from "next/navigation";
import MainButton from "./MainButton";

const ContactButton = () => {
  const router = useRouter(); // Use Next.js router

  return (
    <MainButton
      text="Contact Us"
      className="mt-4 md:mt-8"
      onClick={() => {
        console.log("Redirecting to contact page");
        router.push("/contact-us"); // Correct Next.js navigation
      }}
    />
  );
};

export default ContactButton;
