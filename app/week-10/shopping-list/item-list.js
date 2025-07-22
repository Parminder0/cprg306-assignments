export default function ItemList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id} className="border p-2 rounded shadow">
          {item.name} ({item.quantity}) - {item.category}
        </li>
      ))}
    </ul>
  );
}
