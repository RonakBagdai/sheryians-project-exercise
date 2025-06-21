import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center gap-x-10 bg-gray-800 p-4 text-white mb-5">
      <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/create"
      >
        Create Recipe
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/favorites"
      >
        Favorites
      </NavLink>
    </div>
  );
};

export default NavBar;
