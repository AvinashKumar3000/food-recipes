// src/components/RecipeItem.jsx

import React from 'react';

const RecipeItem = ({ recipe }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Ingredients</h6>
                <ul className="list-group list-group-flush">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="list-group-item">
                            {ingredient}
                        </li>
                    ))}
                </ul>
                <p className="card-text mt-3">{recipe.instructions}</p>
            </div>
        </div>
    );
};

export default RecipeItem;
