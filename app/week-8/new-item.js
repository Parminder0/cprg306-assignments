'use client';

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      quantity: parseInt(quantity),
      category
    };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('produce');
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>

      <div className="mb-2">
        <label className="block text-sm">Item Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
      </div>

      <div className="mb-2">
        <label className="block text-sm">Quantity:</label>
        <input
          type="number"
          value={quantity}
          min="1"
          max="20"
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
}
