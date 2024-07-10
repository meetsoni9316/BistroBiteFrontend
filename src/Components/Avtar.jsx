import React from "react";

function Avtar() {
  return (
    <>
      <div className="justify-items-center items-center grid md:grid-cols-4 md:gap-6 grid-cols-2    ">
        <div className="avatar indicator md:mt-1 mt-8 flex flex-col">
          <div className="md:w-60 w-32 rounded-full hover:scale-110 ">
            <img
              alt="Tailwind CSS examples"
              src="https://i.pinimg.com/originals/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.png"
            />
          </div>
          <button className="btn glass mt-5 text-sb hover:text-cho">
            Chef Max Stone
          </button>
        </div>

        <div className="avatar indicator md:mt-1 mt-8 flex flex-col">
          <div className="md:w-60 w-32 rounded-full hover:scale-110">
            <img
              alt="Tailwind CSS examples"
              src="https://morethanpasta.com/images/02_chef-team_550x740.jpg"
            />
          </div>
          <button className="btn glass mt-5 text-sb hover:text-cho">
            Chef Ella Kim
          </button>
        </div>

        <div className="avatar indicator md:mt-1 mt-2 flex flex-col">
          <div className="md:w-60 w-32 rounded-full hover:scale-110">
            <img
              alt="Tailwind CSS examples"
              src="https://th.bing.com/th/id/R.8a924d9d7b6647348734a1ca0fcd9a43?rik=QqkzOppMLZZYwA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1282658%2fimages%2fo-FEMALE-CHEF-facebook.jpg&ehk=pqZ%2byI7Z%2ffmV9yIAZsKdY6HlCV8CQHFzq%2fj84utCxyk%3d&risl=&pid=ImgRaw&r=0"
            />
          </div>
          <button className="btn glass mt-5 text-sb hover:text-cho">
            Chef Zoe Chen
          </button>
        </div>

        <div className="avatar indicator md:mt-1 mt-2 flex flex-col">
          <div className="md:w-60 w-32 rounded-full hover:scale-110">
            <img
              alt="Tailwind CSS examples"
              src="https://antiqueindianrestaurant.com/wp-content/uploads/2019/07/team_image04.jpg"
            />
          </div>
          <button className="btn glass mt-5 text-sb hover:text-cho">
            Chef Jo Li
          </button>
        </div>
      </div>
    </>
  );
}

export default Avtar;
