import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center items-center gap-4 bg-gray-700 p-4">
      <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/service"
      >
        Service
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/product"
      >
        Product
      </NavLink>
    </div>
  );
};

export default Nav;
