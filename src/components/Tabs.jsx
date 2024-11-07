// src/components/Tabs.jsx

import React from 'react';
import recipes from '../data/recipes';

const Tabs = ({ activeIngredients, onIngredientSelect }) => {
    // Extracting all unique ingredients from the recipes
    const allIngredients = Array.from(new Set(recipes.flatMap(recipe => recipe.ingredients)));

    return (
        <div className="d-flex flex-wrap my-3">
            {allIngredients.map((ingredient) => (
                <div key={ingredient} className="form-check form-check-inline mx-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={ingredient}
                        id={ingredient}
                        checked={activeIngredients.includes(ingredient)}
                        onChange={() => onIngredientSelect(ingredient)}
                    />
                    <label className="form-check-label" htmlFor={ingredient}>
                        {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Tabs;
