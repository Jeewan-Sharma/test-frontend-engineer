import React from "react";
import "./styles.css";

const Categories = () => {
  return (
    <div className="pt-3 px-3 md:px-8 lg:px-16 flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div
          className="boxShadow h-72 category-box"
          style={{ backgroundImage: "url('/images/women.png')" }}
        >
          <p className="category_name">Women</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-2 flex flex-wrap">
        <div className="w-full pb-1">
          <div
            className="boxShadow h-36 category-box"
            style={{ backgroundImage: "url('/images/shoes.png')" }}
          >
            <p className="category_name">Shoes</p>
          </div>
        </div>
        <div className="w-full pt-1">
          <div
            className="boxShadow h-36 category-box"
            style={{ backgroundImage: "url('/images/bags.png')" }}
          >
            <p className="category_name">Bags</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div
          className="boxShadow h-72 category-box"
          style={{ backgroundImage: "url('/images/watches.png')" }}
        >
          <p className="category_name">Watches</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div
          className="boxShadow h-72 category-box"
          style={{ backgroundImage: "url('/images/men.png')" }}
        >
          <p className="category_name">Men</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
