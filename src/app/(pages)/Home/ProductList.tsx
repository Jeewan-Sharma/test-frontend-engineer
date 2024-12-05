"use client";
import ProductCard from "@/app/components/productCard";
import useFetchProducts from "@/app/hooks/useFetchData";
import React from "react";

const ProductList = () => {
  const {
    data: products,
    error,
    loading,
  } = useFetchProducts("https://fakestoreapi.com/products");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="px-3 md:px-8 lg:px-16 py-4">
      <p className="text-center text-xl font-bold text-gray-700">
        All Products
      </p>
      <div className="flex flex-wrap my-3">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={{
              id: item.id,
              title: item.title,
              price: item.price,
              description: item.description,
              image: item.image,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
