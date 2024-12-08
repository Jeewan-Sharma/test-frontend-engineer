"use client";

import React, { useState, useEffect, useCallback } from "react";

interface CounterProps {
  initialCount: number;
  onCountChange: (count: number) => void;
}

const ProductCounter: React.FC<CounterProps> = ({
  initialCount,
  onCountChange,
}) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const handleCountChange = useCallback(
    (newCount: number) => {
      setCount(newCount);
      onCountChange(newCount);
    },
    [onCountChange]
  );

  const increment = useCallback(() => {
    handleCountChange(count + 1);
  }, [count, handleCountChange]);

  const decrement = useCallback(() => {
    if (count > 1) {
      handleCountChange(count - 1);
    }
  }, [count, handleCountChange]);

  return (
    <div className="flex items-center space-x-4 p-1 border rounded-lg bg-gray-50">
      <button
        onClick={decrement}
        className="px-2 py-1 disabled:opacity-50"
        disabled={count <= 1}
      >
        <p className="text-2xl">-</p>
      </button>
      <span className="text-lg font-medium">{count}</span>
      <button onClick={increment} className="px-2 py-1">
        <p className="text-2xl">+</p>
      </button>
    </div>
  );
};

ProductCounter.displayName = "ProductCounter";

export default ProductCounter;
