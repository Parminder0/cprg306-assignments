'use client';
import { useEffect, useState } from 'react';

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      if (!ingredient) return;
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">
       {ingredient ? `Meal Ideas for "${ingredient}"` : "Select an item to view meal ideas"}
      </h2>

    <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="border p-2 rounded">
            <p className="font-semibold">{meal.strMeal}</p>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-40 mt-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}

