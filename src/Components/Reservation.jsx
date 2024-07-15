import React from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Reservation() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      name: data.name,
      email: data.email,
      number: data.number,
      meal: data.meal,
      date: data.date,
    };

    await axios
      .post("https://bistrobitrbackend.onrender.com/bistrobite/reservation", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success(
            "Reservation confirmed! We look forward to seeing you."
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
    <div>
      <div className="bg-gradient-to-r from-mt to-ft overflow-hidden h-screen">
        <Navbar />
        <div className=" flex items-center justify-center md:mt-8 mt-20">
          <div className="card md:w-96 md:h-105 w-80 h-112 glass">
            <div className="card-body justify-center items-center ">
              <h2 className="card-title text-sb text-2xl font-bold ">
                Reserve Your Spot
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
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                </label>

                {errors.name && (
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

                <label className="input input-bordered flex items-center gap-2 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-phone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                  </svg>
                  <input
                    type="text"
                    className="grow md:w-64 w-36"
                    placeholder="Phone Number"
                    {...register("number", { required: true })}
                  />
                </label>
                {errors.number && (
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
                    class="bi bi-backpack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                    <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5" />
                  </svg>
                  <select
                    className="grow md:w-64 w-36 "
                    {...register("meal", { required: true })}
                  >
                    <option disabled selected className="bg-cho text ">
                      Please select your meal
                    </option>
                    <option className="bg-cho text-sb">Breakfast</option>
                    <option className="bg-cho text-sb">Lunch</option>
                    <option className="bg-cho text-sb">Dinner</option>
                  </select>
                </label>
                {errors.meal && (
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
                    class="bi bi-calendar3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  <input
                    type="date"
                    className="grow md:w-64 w-36 "
                    {...register("date", { required: true })}
                  />
                </label>
                {errors.date && (
                  <span className="text-sm text-re">Please enter date</span>
                )}

                <div className="card-actions justify-center mt-8 ">
                  <button className="btn border-none bg-cho text-sb hover:text-cho font-bold ">
                    Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
