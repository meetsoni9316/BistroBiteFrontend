import React from "react";
import { Link } from "react-router-dom";

function Discription() {
  return (
    <>
      <div>
        <div className="md:mt-40 mt-32 md:ml-16 md:ml-10 ml-4  text-6xl font-bold z-0 moving-text">
          {" "}
          <span className="bg-gradient-to-r from-blue-500 to-sb-8000 text-transparent bg-clip-text font-bold ">
            {" "}
            Discover Delight in Every Bite
          </span>
        </div>

        <div className="text-sb md:ml-10 ml-4 md:ml-16 mt-12  ">
          Welcome to BistroBite! We're delighted to have you here to enjoy{" "}
          <div>
            our fresh, flavorful dishes crafted with passion. Relax in our{" "}
          </div>
          warm, inviting atmosphere and let us make your dining{" "}
          <div>experience memorable. Bon appétit!</div>
        </div>
        <div className="mt-12 md:ml-16 md:ml-10 ml-4 font-bold text-4xl text-black ">
          {" "}
          Open For Lunch & Dinner{" "}
        </div>
        <Link
          to="/reservation"
          className="btn glass mt-12 md:ml-16 md:ml-10 ml-4 font-bold text-sb outline text-xl hover:text-black"
        >
          Reserve Your Table
        </Link>
      </div>
    </>
  );
}

export default Discription;
