import React, { useState, useEffect } from 'react';
import Tabs from './components/Tabs';
import RecipeList from './components/RecipeList';
import recipes from './data/recipes';

const App = () => {
  const [activeIngredients, setActiveIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  // Function to handle ingredient selection
  const handleIngredientSelect = (ingredient) => {
    setActiveIngredients((prev) => {
      if (prev.includes(ingredient)) {
        return prev.filter((item) => item !== ingredient);
      } else {
        return [...prev, ingredient];
      }
    });
  };

  // Filter recipes whenever activeIngredients changes
  useEffect(() => {
    const filtered = recipes.filter((recipe) => {
      // Ensure the recipe contains **all** selected ingredients
      return activeIngredients.every((ingredient) => recipe.ingredients.includes(ingredient));
    });
    setFilteredRecipes(filtered);
  }, [activeIngredients]);

  return (
    <div className="container">
      <h1>Recipe Management</h1>
      <Tabs activeIngredients={activeIngredients} onIngredientSelect={handleIngredientSelect} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default App;
