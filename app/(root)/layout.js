import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;