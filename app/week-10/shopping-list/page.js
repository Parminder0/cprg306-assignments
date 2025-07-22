"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      if (user) {
        const loadedItems = await getItems(user.uid);
        setItems(loadedItems);
      }
    }

    loadItems();
  }, [user]);

  async function handleAddItem(item) {
    const id = await addItem(user.uid, item);
    const newItemWithId = { id, ...item };
    setItems((prevItems) => [...prevItems, newItemWithId]);
  }

  if (!user) {
    return <p className="p-4 text-red-500">Access Denied. Please sign in.</p>;
  }

  return (
   <main className="p-6 max-w-2xl mx-auto text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
