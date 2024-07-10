import React from "react";

function Carousal() {
  return (
    <>
      <div className="carousel carousel-center md:max-w-screen-2xl max-w-full p-4 space-x-4 bg-cho rounded-box">
        <div className="carousel-item">
          <div className="card card-compact md:w-96 w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="http://images.media-allrecipes.com/userphotos/960x960/4518422.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-vg  text-xl">Breakfast Menu</h2>
              <p className="font-bold mt-4">
                Start your day right with our delicious selection of morning
                favorites, from fluffy pancakes to savory bacon and eggs.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card card-compact md:w-96 w-80  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://foodmeanderings.com/wp-content/uploads/2018/04/healthy-fish-tacos-recipe.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-vg text-xl">Lunch Menu</h2>
              <p className="font-bold mt-4">
                Enjoy a satisfying midday meal with our assortment of
                sandwiches, salads, soups, and light entrees, perfect for a
                quick yet flavorful lunch break.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card card-compact md:w-96 w-80  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://zenideen.com/wp-content/uploads/2020/06/pizza-basilikum-mozzarella.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-vg text-xl">Dinner Menu</h2>
              <p className="font-bold mt-4">
                Indulge in an unforgettable dining experience with our exquisite
                dinner menu, featuring an array of mouthwatering appetizers,
                sumptuous main courses, and decadent desserts.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card card-compact md:w-96 w-80  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://alivingbalance.net/wp-content/uploads/2014/11/Brownies2.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-vg text-xl">Dessert Menu</h2>
              <p className="font-bold mt-4">
                Treat yourself to a sweet ending with our irresistible dessert
                menu, offering heavenly delights like rich chocolate lava cake
                and creamy tiramisu.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card card-compact md:w-96 w-80  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://d.ibtimes.co.uk/en/full/1628878/red-wine.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-vg text-xl">Drinks Menu</h2>
              <p className="font-bold mt-4">
                {" "}
                Quench your thirst and elevate your dining experience with our
                extensive drinks menu, showcasing refreshing cocktails, fine
                wines, and specialty beverages.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card card-compact md:w-96 w-80  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://cmx.weightwatchers.com/assets-proxy/weight-watchers/image/upload/t_WINE_EXTRALARGE/x2twpjaend32covbtztu.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-vg text-xl">Kids’ Menu</h2>
              <p className="font-bold mt-4">
                Keep the little ones happy with our kid-friendly menu, featuring
                tasty and nutritious options sure to please even the pickiest
                eaters.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card card-compact md:w-96 w-80  bg-base-100 shadow-xl">
            <figure>
              <img
                src="http://del.h-cdn.co/assets/15/46/1447342914-delish-lentil-soup.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-vg text-xl">
                Health and Wellness Menu
              </h2>
              <p className="font-bold mt-4">
                Nourish your body and soul with our health-conscious menu,
                crafted to provide delicious and nutritious options for mindful
                eating.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousal;
