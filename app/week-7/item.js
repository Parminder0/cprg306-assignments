export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded shadow">
      <strong>{name}</strong> – {quantity} ({category})
    </li>
  );
}
