import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Carousal from "../Components/Carousal.jsx";
import Discription from "../Components/Discription.jsx";
import Mission from "../Components/Mission.jsx";

function Home() {
  const backgroundStyle = {
    backgroundImage: "url('https://wallpaperaccess.com/full/4685440.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue to-sb mt-0 overflow-hidden">
        <div className=" bg-initial bg-center  " style={backgroundStyle}>
            <Navbar />
          <div>
            <Discription />
          </div>
        </div>
        <br />
        <br />
             <Mission />
             <Carousal />
             <Footer />
      </div>
    </>
  );
}

export default Home;
