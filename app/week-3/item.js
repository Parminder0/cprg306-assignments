export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-4 rounded-lg shadow bg-white hover:bg-gray-50 transition">
      <div className="font-bold text-lg text-gray-800">{name}</div>
      <div className="text-gray-700">Quantity: {quantity}</div>
      <div className="text-gray-700">Category: {category}</div>
    </li>
  );
}
