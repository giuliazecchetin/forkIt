import { useMemo, useState } from 'react';
import recipes from './data/recipes.json';
import RecipeCard from './components/Recipe Card/RecipeCard';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return recipes;
    }

    return recipes.filter((recipe) => {
      const ingredientsText = Array.isArray(recipe.ingredients)
        ? recipe.ingredients.join(' ')
        : '';

      const searchableText = `${recipe.name} ${recipe.description || ''} ${ingredientsText}`.toLowerCase();
      return searchableText.includes(query);
    });
  }, [searchTerm]);

  return (
    <>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="App">
        <main className="recipesGrid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </main>

        {filteredRecipes.length === 0 && (
          <p className="emptyState">Nessuna ricetta trovata. Prova con un altro termine.</p>
        )}
      </div>
    </>
  );
}

export default App;