import React from "react";

function Table() {
  return (
    <div>
      <div className="overflow-x-auto md:mt-10 mt-8">
        <table className="table ">
          <thead>
            <tr>
              <th
                className=" text-lg
        text-sb  md:w-40 w-80"
              >
                Name
              </th>
              <th
                className=" text-lg
        text-sb w-screen "
              >
                About
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="">
                <div className="flex items-center gap-3 flex-col">
                  <div className="avatar ">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://i.pinimg.com/originals/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" text-sb ">Chef Max Stone</div>
                  </div>
                </div>
              </td>
              <td className=" text-sb w-80 ">
                With a flair for contemporary cuisine, Chef Max Stone combines
                traditional techniques with modern innovation to craft dishes
                that are both inventive and flavorful. His dedication to
                sourcing the finest ingredients ensures that each dish is a
                masterpiece of culinary artistry.
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3 flex-col ">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://morethanpasta.com/images/02_chef-team_550x740.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" text-sb">Chef Ella Kim</div>
                  </div>
                </div>
              </td>
              <td className=" text-sb">
                A master of Korean fusion cuisine, Chef Ella Kim infuses her
                dishes with bold flavors and creative twists. Drawing
                inspiration from her Korean heritage and global culinary
                influences, she creates dishes that are as visually stunning as
                they are delicious, capturing the essence of modern gastronomy.
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3 flex-col">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://th.bing.com/th/id/R.8a924d9d7b6647348734a1ca0fcd9a43?rik=QqkzOppMLZZYwA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1282658%2fimages%2fo-FEMALE-CHEF-facebook.jpg&ehk=pqZ%2byI7Z%2ffmV9yIAZsKdY6HlCV8CQHFzq%2fj84utCxyk%3d&risl=&pid=ImgRaw&r=0"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" text-sb">Chef Zoe Chen</div>
                  </div>
                </div>
              </td>
              <td className=" text-sb">
                Hailing from China, Chef Zoe Chen brings her expertise in
                Cantonese cuisine to the table, delighting guests with her
                skillful wok techniques and delicate flavors. Her dishes
                showcase the diversity of Chinese culinary traditions, from
                savory dim sum to comforting noodle soups.
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3 flex-col">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://antiqueindianrestaurant.com/wp-content/uploads/2019/07/team_image04.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" text-sb">Chef Jo Li</div>
                  </div>
                </div>
              </td>
              <td className=" text-sb">
                With a passion for French pastry, Chef Jo Li dazzles diners with
                her exquisite desserts and baked goods. Trained in the art of
                patisserie, she brings precision and artistry to her craft,
                creating desserts that are as beautiful to behold as they are
                heavenly to taste.
                <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
