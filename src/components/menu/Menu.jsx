import "./style.css";

import { useState } from "react";
import foodtype from "./data";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("pizza");

  const categories = ["pizza", "maindishes", "desert", "drinks"];

  const filterItems = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <section className="menu">
        <div className="menu-container items-center text-center">
          <h1 className="text-[3.25rem] font-bold text-[#e75b1e]">Our Menu</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in <br />
            some form, by injected humour, or randomised words which don`t look
            even slightly believable.
          </p>
        </div>
      </section>

      <section className="sec-container mx-auto mt-8 bg-[#E6E6E6] p-6">
        {/* Categories Section */}
        <div className="menu-wrapper mb-8 flex justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`primaryBtn mx-2 rounded-lg px-4 py-2 text-white ${
                selectedCategory === category
                  ? "bg-orange-600"
                  : "bg-gray-500 hover:bg-gray-600"
              }`}
              onClick={() => filterItems(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Food Items Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {foodtype[selectedCategory].map((item, index) => (
            <div
              key={index}
              className="flex transform flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md transition hover:scale-105"
            >
              <img
                src={item.cover} // Assuming the image directory is set up
                alt={item.name}
                className="mb-4 h-[40vh] w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-lg font-semibold text-orange-600">
                {item.name}
              </h3>
              <p className="mb-2 text-sm text-gray-600">{item.ingredient}</p>
              <p className="text-lg font-bold text-gray-800">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
