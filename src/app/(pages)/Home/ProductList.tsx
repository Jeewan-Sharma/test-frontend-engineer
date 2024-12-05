"use client";
import Icons from "@/app/components/Icons";
import ProductCard from "@/app/components/productCard";
import useFetchProducts from "@/app/hooks/useFetchData";
import useInfiniteScroll from "@/app/hooks/useInfiniteScroll";
import React, { useRef, useState } from "react";

const ProductList = () => {
  const [page, setPage] = useState<number>(1);
  const limit = 12;
  const listRef = useRef<HTMLDivElement>(null);

  const {
    data: products,
    loading,
    error,
    hasMore,
  } = useFetchProducts({
    url: "https://api.escuelajs.co/api/v1/products",
    page,
    limit,
  });

  useInfiniteScroll(loading, hasMore, setPage, listRef);
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="px-3 md:px-8 lg:px-16 py-4">
      <p className="text-center text-xl font-bold text-gray-700">
        All Products
      </p>
      <div ref={listRef} className="flex flex-wrap my-3">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={{
              id: item.id,
              title: item.title,
              price: item.price,
              description: item.description,
              image: item.category.image,
            }}
          />
        ))}
      </div>
      {loading && (
        <div className="p-4 flex gap-2 justify-center items-center">
          <div className="text-primary_color animate-spin">{Icons.Loading}</div>
          <p className="text-xl font-bold text-primary_color text-center">
            Loading...
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
