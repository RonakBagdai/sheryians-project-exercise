import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  console.log("RecipeContext", data);
  return (
    <recipecontext.Provider value={{ data, setData }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;

/* {
      id: 1,
      name: "Classic Margherita Pizza",
      ingredients: [
        "Pizza dough,
        Tomato sauce,
        Fresh mozzarella cheese,
        Fresh basil leaves,
        Olive oil,
        Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C),
        Roll out the pizza dough and spread tomato sauce evenly,
        Top with slices of fresh mozzarella and fresh basil leaves.,
        Drizzle with olive oil and season with salt and pepper.,
        Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.,
        Slice and serve hot.",
      ],
      chef: "Chef Luigi",
      description:
        "Classic Margherita Pizza is a simple yet delicious pizza that features a thin crust topped with fresh mozzarella cheese, tomato sauce, and fragrant basil leaves. It's a timeless favorite that highlights the quality of its ingredients.",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",

      category: "Dinner",
    },
    {
      id: 2,
      name: "Spaghetti Carbonara",
      ingredients: [
        "Spaghetti pasta",
        "Eggs",
        "Parmesan cheese",
        "Pancetta or bacon",
        "Black pepper",
        "Salt",
      ],
      instructions: [
        "Cook the spaghetti in salted boiling water until al dente.",
        "Fry the pancetta until crispy.",
        "Whisk eggs with grated Parmesan and black pepper in a bowl.",
        "Drain the pasta and mix immediately with the pancetta.",
        "Quickly stir in the egg mixture to create a creamy sauce.",
        "Serve immediately with extra cheese and pepper.",
      ],
      chef: "Chef Marco",
      description:
        "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It’s creamy, comforting, and ready in minutes.",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      category: "Dinner",
    },
    {
      id: 3,
      name: "Creamy Mushroom Risotto",
      ingredients: [
        "Arborio rice",
        "Vegetable broth",
        "Mushrooms",
        "Onion",
        "Garlic",
        "Parmesan cheese",
        "Butter",
        "Olive oil",
        "Salt and pepper",
      ],
      instructions: [
        "Sauté onions and garlic in olive oil until translucent.",
        "Add mushrooms and cook until tender.",
        "Stir in Arborio rice and toast for 2 minutes.",
        "Gradually add warm broth while stirring constantly.",
        "Once rice is creamy and cooked, stir in butter and Parmesan.",
        "Serve hot with extra cheese on top.",
      ],
      chef: "Chef Isabella",
      description:
        "Creamy Mushroom Risotto is a comforting Italian dish featuring Arborio rice slowly cooked in broth and finished with rich mushrooms, butter, and cheese.",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      category: "Dinner",
    },
    {
      id: 4,
      name: "Grilled Lemon Herb Chicken",
      ingredients: [
        "Chicken breasts",
        "Lemon juice",
        "Garlic",
        "Fresh herbs (thyme, rosemary, parsley)",
        "Olive oil",
        "Salt and pepper",
      ],
      instructions: [
        "Marinate chicken with lemon juice, garlic, herbs, olive oil, salt, and pepper for 30 minutes.",
        "Preheat grill to medium-high heat.",
        "Grill chicken for 6-7 minutes on each side or until fully cooked.",
        "Let rest for a few minutes before serving.",
        "Serve with a side of vegetables or salad.",
      ],
      chef: "Chef Elena",
      description:
        "Grilled Lemon Herb Chicken is juicy and flavorful, infused with citrus and fresh herbs. It's a healthy and simple dinner option perfect for any night.",
      image: "https://cdn.dummyjson.com/recipe-images/4.webp",
      category: "Dinner",
    }, */
