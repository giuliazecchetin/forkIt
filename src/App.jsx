import recipes from './data/recipes.json';
import RecipeCard from './components/Recipe Card/RecipeCard';

function App() {
  return (
    <div className="App">
      <header>
        <h1>ForkIt 🍴</h1>
      </header>
      
      <main style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </main>
    </div>
  );
}

export default App;