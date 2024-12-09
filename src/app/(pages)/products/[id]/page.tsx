import axios from "axios";
import React from "react";
import { notFound } from "next/navigation";
import ProductDetailsClient from "./ProductDetailsClient";
import { IProduct } from "@/app/types/IProducts";

async function fetchProduct(id: string) {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  if (!id) {
    throw new Error("Product ID is missing from params.");
  }

  const product: IProduct = await fetchProduct(id);

  if (!product) {
    notFound();
  }

  // Pass product data to the client-side component
  return <ProductDetailsClient product={product} />;
};

export default ProductDetails;
