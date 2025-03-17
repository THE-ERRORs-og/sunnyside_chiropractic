
import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";


const Layout = ({ children }) => {
 
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar  />
        
      </div>
      <main className="w-full">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
