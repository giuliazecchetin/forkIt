import { useState } from 'react';
import styles from './recipeCard.module.css';

function RecipeCard({ recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <article className={styles.card}>
        <div className={styles.imageWrap}>
          <img src={`/images/${recipe.image}`} alt={recipe.name} className={styles.image} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{recipe.name}</h3>
          <p className={styles.meta}>Difficolta: {recipe.difficulty} | Tempo: {recipe.time}</p>

          {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 && (
            <div className={styles.ingredientsBlock}>
              <h4 className={styles.sectionTitle}>Ingredienti</h4>
              <ul className={styles.list}>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          <button type="button" className={styles.toggleButton} onClick={() => setShowDetails(true)}>
            Apri dettagli
          </button>
        </div>
      </article>

      {showDetails && (
        <div className={styles.modalOverlay} onClick={() => setShowDetails(false)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label={`Dettagli ricetta ${recipe.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3 className={styles.title}>{recipe.name}</h3>
              <button type="button" className={styles.closeButton} onClick={() => setShowDetails(false)}>
                Chiudi
              </button>
            </div>

            <p className={styles.meta}>Difficolta: {recipe.difficulty} | Tempo: {recipe.time}</p>

            <div className={styles.details}>
              {recipe.description && <p className={styles.description}>{recipe.description}</p>}

              {Array.isArray(recipe.steps) && recipe.steps.length > 0 && (
                <>
                  <h4 className={styles.sectionTitle}>Procedimento</h4>
                  <ol className={styles.orderedList}>
                    {recipe.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeCard;