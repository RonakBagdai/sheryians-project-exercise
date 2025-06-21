import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  // const renderRecipes = data.map((recipe) => {
  //   <div key={recipe.id}>
  //     <h1>{recipe.name}</h1>
  //   </div>;
  // });
  // return <div>{renderRecipes}</div>;

  const renderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="flex flex-wrap">
      {data.length > 0 ? renderRecipes : <p>No recipes found.</p>}
    </div>
  );
};

export default Recipes;
