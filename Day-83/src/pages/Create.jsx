import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData((prevData) => [...prevData, recipe]);
    localStorage.setItem("recipes", JSON.stringify([...data, recipe]));
    toast.success("Recipe added successfully!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="flex justify-center items-center bg-gray-800 p-4">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="bg-gray-700 rounded-xl shadow-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
          Create a New Recipe
        </h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Image URL</label>
          <input
            className="block w-full border-b outline-0 p-2 bg-gray-600 text-gray-100"
            type="url"
            placeholder="Image URL"
            {...register("image")}
          />
          {/* <small className="text-red-500">Error message here</small> */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Recipe Name</label>
          <input
            className="block w-full border-b outline-0 p-2 bg-gray-600 text-gray-100"
            {...register("name")}
            type="text"
            placeholder="Recipe Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Description</label>
          <textarea
            className="block w-full border-b outline-0 p-2 bg-gray-600 text-gray-100"
            {...register("description")}
            placeholder="Recipe Description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            className="block w-full border-b outline-0 p-2 bg-gray-600 text-gray-100"
            {...register("ingredients")}
            placeholder="Ingredients"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">
            Cooking Instructions
          </label>
          <textarea
            className="block w-full border-b outline-0 p-2 bg-gray-600 text-gray-100"
            {...register("instructions")}
            placeholder="Cooking Instructions"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Chef Name</label>
          <input
            className="block w-full border-b outline-0 p-2 bg-gray-600 text-gray-100"
            {...register("chef")}
            type="text"
            placeholder="Chef Name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Category</label>
          <select
            {...register("category")}
            className="block w-full border-b outline-0 p-2 bg-gray-600 text-gray-100"
          >
            <option value="">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        <button className="w-full bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
