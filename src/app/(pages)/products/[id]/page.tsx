import axios from "axios";
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { IProduct } from "@/app/types/IProducts";
import Icons from "@/app/components/Icons";
import ProductCounter from "@/app/components/ProductCounter";
import Button from "@/app/components/Button";

async function fetchProduct(id: string) {
  try {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  if (!id) {
    throw new Error("Product ID is missing from params.");
  }

  const product: IProduct = await fetchProduct(id);

  if (!product) {
    notFound();
  }
  return (
    <div className="px-3 md:px-8 lg:px-16 py-3 mb-7">
      <div className="flex">
        <div className="w-2/5">
          <Image
            src={product.category.image}
            alt="logo"
            width={90}
            height={90}
            className="h-96 w-auto object-cover rounded-md"
          />
        </div>
        <div className="w-3/5">
          <p className="text-2xl font-semibold">{product.title}</p>
          <div className="flex align-middle mt-1 gap-3">
            <div className="flex gap-1">
              {Icons.star}
              {Icons.star}
              {Icons.star}
              {Icons.star}
              {Icons.star}
            </div>
            <div>
              <p>(200 reviews)</p>
            </div>
          </div>
          <div>
            <p className="text-3xl mt-3 font-bold">${product.price}</p>
          </div>
          <div className="flex mt-3">
            <div className="w-1/2">
              <p>Available Size</p>
              <div className="flex gap-2 mt-1">
                <p className="py-2 px-3 border cursor-pointer">S</p>
                <p className="py-2 px-3 border cursor-pointer">M</p>
                <p className="py-2 px-3 border cursor-pointer">L</p>
              </div>
            </div>
            <div className="w-1/2">
              <p>Available Colors</p>
              <div className="flex gap-2 mt-1">
                <div className="p-1 border cursor-pointer">
                  {Icons.rectangle}
                </div>
                <div className="p-1 border cursor-pointer text-red-600">
                  {Icons.rectangle}
                </div>
                <div className="p-1 border cursor-pointer text-white">
                  {Icons.rectangle}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <p>Availability:</p>
            <p className="text-green-600 font-semibold">In Stock</p>
          </div>
          <div className="mt-5 flex gap-5">
            <ProductCounter />
            <Button name="Add to cart" type="btn-primary" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-lg font-semibold w-full pb-1 border-b">
          Description
        </p>
        <p className="mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
