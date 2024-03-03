// src/app/meal/page.tsx
import React from 'react';

// Define TypeScript interfaces for your data
interface MealDetails {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  // Add more fields as needed
}

const MealPage: React.FC = async () => {
  // Fetch data inside the component
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772');
  const data = await response.json();
  const meal: MealDetails = data.meals[0];

  // Check for an unsuccessful fetch
  if (!response.ok) {
    throw new Error('Failed to fetch meal data');
  }

  // Component render
  return (
    <main>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
      {/* Render other meal details as needed */}
    </main>
  );
};

export default MealPage;
