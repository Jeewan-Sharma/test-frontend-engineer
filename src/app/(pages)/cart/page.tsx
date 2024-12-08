"use client";

import React, { useCallback } from "react";
import { useCart } from "@/app/hooks/useCart";
import ProductCounter from "@/app/components/ProductCounter";
import Image from "next/image";
import Button from "@/app/components/Button";

const Cart = () => {
  const { cart = [], removeFromCart, updateCartItem } = useCart();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.item.price * item.quantity,
    0
  );

  const handleQuantityChange = useCallback(
    (itemId: number, color: string, size: string, newQuantity: number) => {
      updateCartItem(itemId, color, size, newQuantity);
    },
    [updateCartItem]
  );

  const handleRemove = useCallback(
    (itemId: number, color: string, size: string) => {
      if (confirm("Are you sure you want to remove this item?")) {
        removeFromCart(itemId, color, size);
        alert("Item has been removed from the cart.");
      }
    },
    [removeFromCart]
  );

  if (cart.length === 0) {
    return <p className="p-4">Your cart is empty.</p>;
  }

  return (
    <div className="px-3 md:px-8 lg:px-16 py-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={`${item.id}-${item.color}-${item.size}`}
            className="block md:flex justify-between items-center border-b pb-2"
          >
            <div className="flex gap-2">
              <div>
                <Image
                  src={item.item.images[0]}
                  alt="logo"
                  height={90}
                  width={90}
                  className="h-20 w-20 object-contain rounded-md"
                />
              </div>
              <div>
                <p className="font-semibold">{item.item.title}</p>
                <p className="text-gray-600">Color: {item.color}</p>
                <p className="text-gray-600">Size: {item.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ProductCounter
                initialCount={item.quantity}
                onCountChange={(newQuantity) =>
                  handleQuantityChange(
                    item.id,
                    item.color,
                    item.size,
                    newQuantity
                  )
                }
              />
              <p className="font-semibold">
                ${Number(item.item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="text-red-600 font-semibold"
                onClick={() => handleRemove(item.id, item.color, item.size)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mt-4">Summary</h2>
        <div className="mt-4 block md:flex justify-between text-lg font-bold">
          <p>Total Items: {totalQuantity}</p>
          <p className="mt-3 md:mt-0">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
        <div className="w-full flex justify-end mt-3">
          <Button name="Checkout" type="btn-primary" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
