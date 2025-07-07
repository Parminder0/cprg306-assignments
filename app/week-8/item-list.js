'use client';

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button onClick={() => setSortBy('name')} className="text-blue-400">Sort by Name</button>
        <button onClick={() => setSortBy('category')} className="text-blue-400">Sort by Category</button>
      </div>
      <ul>
        {sortedItems.map((item, index) => (
          <Item key={index} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
