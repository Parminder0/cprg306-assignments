export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded mb-2">
      <strong>{name}</strong> - Quantity: {quantity}, Category: {category}
    </li>
  );
}
