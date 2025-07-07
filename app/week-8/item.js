'use client';

export default function Item({ name, quantity, category, onSelect }) {
  function handleClick() {
    if (onSelect) {
      onSelect(name);
    }
  }

  return (
    <li
      onClick={handleClick}
      className="border p-4 my-2 rounded cursor-pointer hover:bg-gray-800"
    >
      <p className="font-bold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
