"use client";

import React from "react";
import Layout from "./layout";
import Banner from "./Home/Banner";
import Categories from "./Home/Categories";
import ProductList from "./Home/ProductList";
import Spinner from "../components/Spinner";
import { LoadingProvider } from "@/app/context/LoadingContext";

const MainIndex = () => {
  return (
    <div>
      <LoadingProvider>
        <Layout>
          <Spinner />
          <Banner />
          <Categories />
          <ProductList />
        </Layout>
      </LoadingProvider>
    </div>
  );
};

export default MainIndex;
