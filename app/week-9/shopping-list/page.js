"use client";

import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import items from "./items.json";

export default function ShoppingListPage() {
  const { user } = useUserAuth();

  if (!user) {
    return (
      <p className="p-4 text-red-500">Access Denied. Please sign in.</p>
    );
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList items={items} />
    </main>
  );
}
