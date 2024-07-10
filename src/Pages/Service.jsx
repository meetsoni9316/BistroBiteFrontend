import React from "react";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Footer from "../Components/Footer";

function Service() {
  return (
    <div className="bg-gradient-to-r from-blue to-sb mt-0 overflow-hidden">
      <Navbar />
      <Services />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Service;
