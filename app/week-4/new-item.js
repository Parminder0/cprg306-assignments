'use client'; // required for useState

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1); // start at 1

  // increase quantity
  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  // decrease quantity
  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-lg">Quantity: <span className="font-bold">{quantity}</span></p>
      
      <div className="flex space-x-4">
        <button 
          onClick={decrement} 
          disabled={quantity === 1}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
        >
          -
        </button>
        <button 
          onClick={increment} 
          disabled={quantity === 20}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
}
