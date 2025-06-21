import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <nav className=" flex justify-center items-center gap-5 p-5 bg-gray-700 text-white">
      <NavLink to="/">Home</NavLink>

      {user ? (
        <>
          {user && user?.isAdmin && (
            <NavLink to="/admin/create-product">Create Product</NavLink>
          )}
          <NavLink to="/admin/user-profile">Settings</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
