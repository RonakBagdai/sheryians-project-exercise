import { use, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { recipecontext } from "../context/RecipeContext";
import { useState } from "react";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = data.find((r) => String(r.id) === id);
  // console.log("SingleRecipe", recipe);

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (recipe) {
      reset({
        image: recipe.image,
        name: recipe.name,
        chef: recipe.chef,
        category: recipe.category,
        description: recipe.description,
        ingredients: Array.isArray(recipe.ingredients)
          ? recipe.ingredients.join(", ")
          : recipe.ingredients,
        instructions: recipe.instructions,
      });
    }
  }, [recipe, reset]);

  const handleDelete = () => {
    const filteredRecipes = data.filter((r) => r.id !== recipe.id);
    setData(filteredRecipes);
    localStorage.setItem("recipes", JSON.stringify(filteredRecipes));

    const updatedFavorites = favorites.filter((fav) => fav.id !== recipe.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    toast.success("Recipe deleted successfully!");
    navigate("/recipes");
  };

  const onSubmit = (formData) => {
    const updatedRecipe = {
      ...recipe,
      ...formData,
      ingredients: formData.ingredients.split(",").map((i) => i.trim()),
    };

    const updatedRecipes = data.map((r) =>
      r.id === recipe.id ? updatedRecipe : r
    );
    setData(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    toast.success("Recipe updated successfully!");
  };

  const FavHandler = () => {
    let updatedFavorites = [...favorites, recipe];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    // toast.success("Recipe added to favorites!");
  };
  const UnFavHandler = () => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== recipe.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    // toast.success("Recipe removed from favorites!");
  };

  if (!recipe) {
    return <div className="text-center py-10">Recipe not found</div>;
  }

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch bg-gray-800 text-gray-100">
      {/* Recipe Display */}
      <div className="w-full relative md:w-1/2 bg-gray-600 rounded-lg shadow p-6 flex flex-col h-full">
        {favorites.find((fav) => fav.id === recipe.id) ? (
          <i
            onClick={UnFavHandler}
            className="right-[3%] absolute text-3xl text-red-500 ri-heart-fill"
          ></i>
        ) : (
          <i
            onClick={FavHandler}
            className="right-[3%] absolute text-3xl text-red-500 ri-heart-line"
          ></i>
        )}
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          {recipe.name}
        </h1>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="rounded w-full h-64 object-cover mb-4"
        />
        <div className="space-y-2 text-gray-100">
          <div className="flex gap-5">
            <p>
              <strong>Chef:</strong> {recipe.chef}
            </p>
            <p>
              <strong>Category:</strong> {recipe.category || "Uncategorized"}
            </p>
          </div>
          <p>
            <strong>Description:</strong> {recipe.description}
          </p>
          <div>
            <strong>Ingredients:</strong>
            <ul className="list-disc pl-5">
              {(Array.isArray(recipe.ingredients)
                ? recipe.ingredients
                : typeof recipe.ingredients === "string"
                ? recipe.ingredients.split(",")
                : []
              ).map((ing, idx) => (
                <li key={idx}>{ing.trim()}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Instructions:</strong>
            <ul className="list-disc pl-5">
              {recipe.instructions.split(",").map((inst, idx) => (
                <li key={idx}>{inst.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onClick={handleDelete}
          className="w-full mt-9 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Delete Recipe
        </button>
      </div>

      {/* Edit Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/2 bg-gray-600 text-gray-100 rounded-lg shadow p-6 flex flex-col"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Edit Recipe
        </h2>

        {[
          { label: "Image URL", name: "image", type: "url" },
          { label: "Recipe Name", name: "name", type: "text" },
          { label: "Chef Name", name: "chef", type: "text" },
        ].map(({ label, name, type }) => (
          <div className="mb-4" key={name}>
            <label className="block mb-1">{label}</label>
            <input
              type={type}
              className="w-full p-2 bg-gray-700 border-b outline-none"
              {...register(name)}
            />
          </div>
        ))}

        {[
          { label: "Description", name: "description" },
          { label: "Ingredients (comma separated)", name: "ingredients" },
          { label: "Instructions", name: "instructions" },
        ].map(({ label, name }) => (
          <div className="mb-4" key={name}>
            <label className="block mb-1">{label}</label>
            <textarea
              className="w-full p-2 bg-gray-700 border-b outline-none"
              rows={name === "instructions" ? 4 : 2}
              {...register(name)}
            />
          </div>
        ))}

        <div className="mb-6">
          <label className="block mb-1">Category</label>
          <select
            {...register("category")}
            className="w-full p-2 bg-gray-700 border-b outline-none"
          >
            <option value="">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-green-600 py-2 rounded hover:bg-green-700"
        >
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default SingleRecipe;
