import { useState } from 'react';

function RecipeCard({ recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '10px', width: '250px' }}>
      <img src={`/public/images/${recipe.image}`} alt={recipe.name} style={{ width: '100%' }} />
      <h3>{recipe.name}</h3>
      <p>Difficoltà: {recipe.difficulty} | Tempo: {recipe.time}</p>

      <button onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? 'Nascondi Ricetta' : 'Vedi Ricetta'}
      </button>

      {showDetails && (
        <div style={{ marginTop: '12px' }}>
          {recipe.description && <p>{recipe.description}</p>}

          {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 && (
            <>
              <h4>Ingredienti</h4>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </>
          )}

          {Array.isArray(recipe.steps) && recipe.steps.length > 0 && (
            <>
              <h4>Procedimento</h4>
              <ol>
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default RecipeCard;