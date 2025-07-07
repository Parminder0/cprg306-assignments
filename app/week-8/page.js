'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(itemName) {
    const cleaned = itemName
      .split(',')[0]
      .replace(/[^\w\s]/gi, '')
      .trim()
      .toLowerCase();

    setSelectedItemName(cleaned);
  }

  return (
    <main className="p-4 flex flex-col md:flex-row gap-8 bg-black min-h-screen text-white">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
