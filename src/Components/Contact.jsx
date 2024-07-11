import React from "react";
import Phone from "./Phone";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const userinfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    await axios
      .post("https://bistrobitrbackend.onrender.com/bistrobite/contact", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success(
            "Thank you for reaching out! We'll respond as soon as possible."
          );
          navigate(from, { replace: true });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          toast.error("Error: " + error.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <>
      <div className="bg-gradient-to-r from-mt to-ft mt-0 overflow-hidden h-screen">
        <Navbar />
        <div className=" flex  items-center  justify-center md:mt-28 mt-16 ">
          <div className="card md:w-96 md:h-105 w-80 h-96 glass  ">
            <div className="card-body justify-center items-center ">
              <h2 className="card-title text-sb text-2xl font-bold">
                Contact Us
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="input input-bordered flex items-center gap-2 mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <input
                    type="text"
                    className="grow md:w-64 w-36"
                    placeholder="Username"
                    {...register("username", { required: true })}
                  />
                </label>
                {errors.username && (
                  <span className="text-sm text-re">
                    This field is required
                  </span>
                )}

                <label className="input input-bordered flex items-center gap-2 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                  </svg>
                  <input
                    type="email"
                    className="grow md:w-64 w-36"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </label>
                {errors.email && (
                  <span className="text-sm text-re">
                    This field is required
                  </span>
                )}

                <label className=" input flex items-center gap-2 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat-left-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                  </svg>

                  <input
                    type="text"
                    placeholder="Write your message here"
                    className="px-3 grow md:w-64 w-36 "
                    {...register("message", { required: true })}
                  />
                </label>

                {errors.message && (
                  <span className="text-sm text-re">
                    This field is required
                  </span>
                )}

                <div className="card-actions justify-center mt-8 ">
                  <button className="btn border-none bg-cho text-sb hover:text-cho font-bold ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>{" "}
        </div>
      </div>
      <Phone />
    </>
  );
}

export default Contact;
