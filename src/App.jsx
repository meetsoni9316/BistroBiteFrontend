import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import React from "react";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Service from "./Pages/Service.jsx";
import Contact from "./Components/Contact.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Reservation from "./Components/Reservation.jsx";
import Feedback from "./Components/Feedback.jsx";
import { useAuth } from "./Context/AuthProvider.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route
          path="/services"
          element={authUser ? <Service /> : <Navigate to="/signup" />}
        />
        <Route
          path="/contactus"
          element={authUser ? <Contact /> : <Navigate to="/signup" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/reservation"
          element={authUser ? <Reservation /> : <Navigate to="/signup" />}
        />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
