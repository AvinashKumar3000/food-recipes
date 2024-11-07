import React from 'react';

const RecipeList = ({ recipes }) => {
    if (recipes.length === 0) {
        return <p>No recipes match the selected ingredients.</p>;
    }

    return (
        <div className="m-12 d-flex flex-wrap">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="card m-2" style={{ width: '330px' }}>
                    <img
                        src={recipe.imgUrl}
                        alt={recipe.name}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{recipe.name}</h5>
                        <p className="card-text">{recipe.instructions}</p>
                        <h6>Ingredients:</h6>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
