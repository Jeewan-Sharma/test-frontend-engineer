"use client";

import React, { useState } from "react";

interface CounterProps {
  initialCount?: number;
  onCountChange?: (count: number) => void;
}

const ProductCounter: React.FC<CounterProps> = ({
  initialCount = 1,
  onCountChange,
}) => {
  const min = 1;
  const max = Infinity;
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => {
      const newCount = Math.min(max, prev + 1);
      onCountChange?.(newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      const newCount = Math.max(min, prev - 1);
      onCountChange?.(newCount);
      return newCount;
    });
  };

  return (
    <div className="flex items-center space-x-4 p-1 border rounded-lg bg-gray-50">
      {/* Decrement Button */}
      <button
        onClick={decrement}
        className="px-2 py-1 disabled:opacity-50"
        disabled={count <= min}
      >
        <p className="text-2xl">-</p>
      </button>

      {/* Count Display */}
      <span className="text-lg font-medium">{count}</span>

      {/* Increment Button */}
      <button
        onClick={increment}
        className="px-2 py-1 disabled:opacity-50"
        disabled={count >= max}
      >
        <p className="text-2xl">+</p>
      </button>
    </div>
  );
};

export default ProductCounter;
