import { useState } from "react";
import { Link } from "react-router-dom";

const Fav = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      {favorites.length === 0 && (
        <p className="text-center text-4xl text-gray-500">
          No favorite recipes found.
        </p>
      )}
      <div className="space-y-4">
        {favorites.map((recipe) => (
          <Link
            to={`/recipes/detail/${recipe.id}`}
            key={recipe.id}
            className="bg-gray-600 p-4 rounded-lg flex items-start justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{recipe.name}</h2>
              <p className="text-gray-100">{recipe.description}</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeFavorite(recipe.id);
              }}
              className="ml-4 text-gray-300 hover:text-red-500 text-2xl font-bold"
              title="Remove from favorites"
            >
              &times;
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Fav;
