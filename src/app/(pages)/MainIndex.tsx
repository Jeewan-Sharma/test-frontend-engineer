import React from "react";
import Layout from "./layout";
import Banner from "./Home/Banner";
import Categories from "./Home/Categories";
import ProductList from "./Home/ProductList";

const MainIndex = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <Categories />
        <ProductList />
      </Layout>
    </div>
  );
};

export default MainIndex;
