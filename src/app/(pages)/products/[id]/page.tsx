import React from "react";
import ProductDetailsClient from "./ProductDetailsClient";

interface PageProps {
  params: {
    id: string;
  };
}

const ProductDetails = async ({ params }: PageProps) => {
  const { id } = await params;

  if (!id) {
    throw new Error("Product ID is missing from params.");
  }

  return <ProductDetailsClient id={id} />;
};

export default ProductDetails;
