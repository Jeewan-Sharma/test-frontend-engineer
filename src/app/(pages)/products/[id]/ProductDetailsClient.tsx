"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Icons from "@/app/components/Icons";
import ProductCounter from "@/app/components/ProductCounter";
import Button from "@/app/components/Button";
import Ratings from "@/app/components/Ratings";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ICartItem } from "@/app/types";
import { useCart } from "@/app/hooks/useCart";
import useProductDetails from "@/app/hooks/useProductDetails";
import { useLoading } from "@/app/context/LoadingContext";
import Spinner from "@/app/components/Spinner";

const ProductDetailsClient = ({ id }: { id: string }) => {
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("s");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const { setGlobalLoading } = useLoading();

  const { product, isLoading, error } = useProductDetails(id);

  // Update global loading state when loading state changes
  useEffect(() => {
    if (isLoading) {
      setGlobalLoading(true);
    } else {
      setGlobalLoading(false);
    }
  }, [isLoading, setGlobalLoading]);

  if (isLoading) {
    return <Spinner />; // Show the spinner while loading
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    const productToAdd: ICartItem = {
      id: product.id,
      item: product,
      color,
      size,
      quantity,
    };

    addToCart(productToAdd);
    alert("Item has been added to the cart.");
  };

  const handleCountChange = (counter: number) => {
    setQuantity(counter);
  };

  return (
    <div className="px-3 md:px-8 lg:px-16 py-3 mb-7">
      <div className="flex flex-wrap space-y-4">
        <div className="w-full lg:w-2/5 flex justify-center">
          <Image
            src={product.images[0]}
            alt="logo"
            width={90}
            height={90}
            className="h-96 w-auto object-cover rounded-md"
          />
        </div>
        <div className="w-full lg:w-3/5">
          <p className="text-2xl font-semibold">{product.title}</p>
          <div className="flex align-middle mt-1 gap-3">
            <Ratings rating={product.rating} />
            <p>{product.rating}</p>
            <p>({product.reviews.length} reviews)</p>
          </div>
          <div>
            <p className="text-3xl mt-3 font-bold">${product.price}</p>
          </div>
          <div className="flex mt-3">
            <div className="w-1/2">
              <p>Available Size</p>
              <div className="flex gap-2 mt-1">
                <p
                  className={`py-2 px-3 border cursor-pointer ${
                    size === "s" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSize("s")}
                >
                  S
                </p>
                <p
                  className={`py-2 px-3 border cursor-pointer ${
                    size === "m" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSize("m")}
                >
                  M
                </p>
                <p
                  className={`py-2 px-3 border cursor-pointer ${
                    size === "l" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSize("l")}
                >
                  L
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <p>Available Colors</p>
              <div className="flex gap-2 mt-1">
                <div
                  className={`p-1 border cursor-pointer ${
                    color === "black" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setColor("black")}
                >
                  {Icons.Rectangle}
                </div>
                <div
                  className={`p-1 border cursor-pointer text-red-600 ${
                    color === "red" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setColor("red")}
                >
                  {Icons.Rectangle}
                </div>
                <div
                  className={`p-1 border cursor-pointer text-white ${
                    color === "white" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setColor("white")}
                >
                  {Icons.Rectangle}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <p>Availability:</p>
            {product.stock >= 10 && (
              <p className="text-green-600 font-semibold">In Stock</p>
            )}
            {product.stock <= 10 && (
              <p className="text-yellow-600 font-semibold">Low Stock</p>
            )}
            {product.stock <= 0 && (
              <p className="text-red-600 font-semibold">Out of Stock</p>
            )}
          </div>
          <div className="mt-5 flex gap-5">
            <ProductCounter
              initialCount={quantity}
              onCountChange={handleCountChange}
            />
            <Button
              onClick={handleAddToCart}
              name="Add to cart"
              type="btn-primary"
            />
          </div>
        </div>
      </div>

      <TabGroup>
        <TabList className="w-full mt-6 flex border-b bg-gray-300">
          <Tab className="text-lg text-left w-1/2 p-1 px-2 font-semibold text-gray-700 data-[selected]:bg-gray-400">
            Description
          </Tab>
          <Tab className="text-lg text-left w-1/2 p-1 px-2 font-semibold text-gray-700 data-[selected]:bg-gray-400">
            Reviews
          </Tab>
        </TabList>
        <TabPanels className="py-2">
          <TabPanel>
            <p className="mt-3">{product.description}</p>
            <div className="mt-3 text-gray-800 flex gap-2">
              <p className="font-bold">Category:</p>
              <p>{product.category}</p>
            </div>
            <div className="mt-3 text-gray-800 flex gap-2">
              <p className="font-bold">Brand:</p>
              <p>{product.brand}</p>
            </div>
            <div className="mt-3 text-gray-800 flex gap-2">
              <p className="font-bold">Product Model:</p>
              <p>{product.sku}</p>
            </div>
            <div className="mt-3 text-gray-800 flex gap-2">
              <p className="font-bold">Warranty:</p>
              <p>{product.warrantyInformation}</p>
            </div>
            <div className="mt-3 text-gray-800 flex gap-2">
              <p className="font-bold">Shipping:</p>
              <p>{product.shippingInformation}</p>
            </div>
            <div className="mt-3 text-gray-800 flex gap-2">
              <p className="font-bold">Return Policy</p>
              <p>{product.returnPolicy}</p>
            </div>
          </TabPanel>
          <TabPanel>
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="mt-3 p-4 border rounded-lg bg-gray-200 flex flex-wrap items-center justify-between"
              >
                <div className="flex gap-4 align-middle">
                  <div>
                    <p className="font-bold text-xl text-primary_color h-10 w-10 py-1 px-3 border border-primary_color rounded-full">
                      {review.reviewerName[0]}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-1 align-middle">
                      <p className="font-semibold">{review.reviewerName}</p>
                      <p className="text-sm text-gray-600">
                        {review.reviewerEmail}
                      </p>
                    </div>
                    <Ratings rating={review.rating} />
                    <p className="text-gray-600 mt-1">{review.comment}</p>
                  </div>
                </div>
                <div className="flex w-full lg:w-auto justify-end">
                  <p className="text-sm">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ProductDetailsClient;
