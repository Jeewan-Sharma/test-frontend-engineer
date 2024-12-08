import { useState, useEffect, useCallback } from "react";
import { ICartItem } from "@/app/types";

const CART_STORAGE_KEY = "cartItems";

export const useCart = () => {
  const [cart, setCart] = useState<ICartItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = useCallback((product: ICartItem) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );

      if (existingProductIndex !== -1) {
        return prevCart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  }, []);

  const removeFromCart = useCallback(
    (productId: number, color: string, size: string) => {
      setCart((prevCart) =>
        prevCart.filter(
          (item) =>
            item.id !== productId || item.color !== color || item.size !== size
        )
      );
    },
    []
  );

  const updateCartItem = useCallback(
    (itemId: number, color: string, size: string, newQuantity: number) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId && item.color === color && item.size === size
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    },
    []
  );

  return { cart, addToCart, updateCartItem, removeFromCart };
};
