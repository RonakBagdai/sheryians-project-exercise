import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Delete, Eye, EyeOff } from "lucide-react";
import {
  asyncdeleteuser,
  asynclogoutuser,
  asyncupdateuser,
} from "../../store/actions/userActions"; // adjust path if needed
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserProfile = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (users) {
      reset({
        username: users.username || "",
        email: users.email || "",
        password: users.password || "",
      });
    }
  }, [users, reset]);

  const UpdateUserHandler = (user) => {
    dispatch(asyncupdateuser(users.id, user));
    toast.success("User updated successfully!");
  };

  const LogoutUserHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/login");
    toast.success("Logged out successfully!");
  };

  const DeleteUserHandler = () => {
    dispatch(asyncdeleteuser(users.id));
    navigate("/login");
    toast.success("User deleted successfully!");
  };

  if (!users) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-lg">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-12">
      <form
        onSubmit={handleSubmit(UpdateUserHandler)}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-gray-800 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Update Profile</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            {...register("username", { required: "Username is required" })}
            className="w-full p-2 rounded bg-gray-100"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
            className="w-full p-2 rounded bg-gray-100"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full p-2 pr-10 rounded bg-gray-100"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-medium transition"
        >
          Save Changes
        </button>

        <button
          type="button"
          onClick={LogoutUserHandler}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg text-lg font-medium transition"
        >
          Logout
        </button>

        <button
          type="button"
          onClick={DeleteUserHandler}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-lg font-medium transition flex items-center justify-center gap-2"
        >
          Delete User
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
