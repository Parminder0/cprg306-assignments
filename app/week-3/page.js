import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Shopping List</h1>
      <ItemList />
    </main>
  );
}
