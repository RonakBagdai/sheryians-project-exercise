import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeCard = (props) => {
  const { id, image, name, chef, description } = props.recipe;

  // Get favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // Check if this recipe is a favorite
  const isFav = favorites.some((fav) => fav.id === id);

  // Handler to add/remove favorite
  const toggleFavorite = (e) => {
    e.preventDefault(); // Prevent link navigation
    let updatedFavorites;
    if (isFav) {
      updatedFavorites = favorites.filter((fav) => fav.id !== id);
    } else {
      updatedFavorites = [...favorites, props.recipe];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Keep state in sync if localStorage changes elsewhere
  useEffect(() => {
    const syncFavorites = () => {
      setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    };
    window.addEventListener("storage", syncFavorites);
    return () => window.removeEventListener("storage", syncFavorites);
  }, []);

  return (
    <Link
      to={`/recipes/detail/${id}`}
      className="mr-4 mb-6 block w-full max-w-xs bg-gray-400 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
    >
      <div className="w-full h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
        <img className="object-cover w-full h-full" src={image} alt={name} />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-lg font-bold text-gray-800 truncate">{name}</h1>
          <i
            onClick={toggleFavorite}
            className={`text-2xl cursor-pointer ${
              isFav ? "ri-heart-fill text-red-500" : "ri-heart-line text-red-500"
            }`}
            title={isFav ? "Remove from favorites" : "Add to favorites"}
          ></i>
        </div>
        <div className="text-sm text-red-500 font-semibold mb-2">{chef}</div>
        <p className="text-gray-600 text-sm mb-2">
          {description.slice(0, 80)}...
          <span className="text-blue-400 ml-1">see more</span>
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;