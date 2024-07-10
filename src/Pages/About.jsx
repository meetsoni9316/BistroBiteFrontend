import React from "react";
import Aboutus from "../Components/Aboutus";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Avtar from "../Components/Avtar";
import Table from "../Components/Table";
import Review from "../Components/Review";
import { Link } from "react-router-dom";

function About() {
  const backgroundStyle = {
    backgroundImage: "url('https://wallpaperaccess.com/full/4685440.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };
  return (
    <>
      <div className="bg-gradient-to-r from-mt to-ft mt-0 overflow-hidden">
        <div
          className=" bg-initial bg-center max-h-screen-2xl "
          style={backgroundStyle}
        >
          <Navbar />
          <Aboutus />
        </div>
      </div>
      <div className="bg-gradient-to-r from-mt to-ft mt-0 overflow-hidden">
        <div className="text-center md:text-2xl text-2xl md:mb-7 mb-2 text-sb bg-black md:h-18 h-10 ">
          <marquee className="text-bold" scrollamount="12">
            Meet Our Top Chefs
          </marquee>
        </div>

        <Avtar />

        <Table />
        <div className="text-center md:text-2xl text-2xl md:mb-7 mb-2 text-sb bg-black md:h-18 h-10 mt-4 ">
          <marquee className="text-bold" scrollamount="12">
            Reviews from Our Valued Customers
          </marquee>
        </div>

        <Review />
        <div className="flex justify-center">
          {" "}
          <Link
            to="/feedback"
            className="btn glass mt-10 text-sb hover:text-cho hover:text-cho "
          >
            We Value Your Feedback
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
