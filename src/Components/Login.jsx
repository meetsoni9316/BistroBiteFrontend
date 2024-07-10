import React from "react";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

function Login() {
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
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://bistrobitrbackend.onrender.com/bistrobite/login", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Welcome back! You have logged in.");
          navigate(from, { replace: true });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
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
      <div className="bg-gradient-to-r from-mt to-ft overflow-hidden h-screen">
        <Navbar />
        <div className=" flex items-center justify-center md:mt-28 mt-48">
          <div className="card md:w-96 md:h-105 glass">
            <div className="card-body justify-center items-center ">
              <h2 className="card-title text-sb text-2xl font-bold ">Login</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="input input-bordered flex items-center gap-2 mt-8">
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
                    className="grow  w-64"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </label>
                {errors.email && (
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
                    class="bi bi-key-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-64 grow  rounded-md outline-none "
                    {...register("password", { required: true })}
                  />
                </label>
                {errors.password && (
                  <span className="text-sm text-re">
                    This field is required
                  </span>
                )}

                <div className=" card-actions justify-around  mt-8">
                  <button className="btn border-none bg-cho text-sb hover:text-cho  font-bold">
                    Login
                  </button>
                  <p className="ml-6 mt-3 text-sb">
                    Not registered?
                    <Link
                      to="/signup"
                      className="underline text-sb cursor-pointer "
                    >
                      {" "}
                      Signup
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
