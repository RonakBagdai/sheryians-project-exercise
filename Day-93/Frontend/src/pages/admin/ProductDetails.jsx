import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { asyncupdateproduct } from "../../store/actions/productActions";
import { asyncdeleteproduct } from "../../store/actions/productActions";
import { Delete } from "lucide-react";
import { asyncupdateuser } from "../../store/actions/userActions";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);
  const product = products?.find((product) => String(product.id) === id);
  const cart = users?.cart || [];
  const cartItem = cart?.find((item) => item.productId === id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id, product));
    toast.success("Product updated successfully!");
  };

  const DeleteProductHandler = () => {
    dispatch(asyncdeleteproduct(id));
    toast.success("Product deleted successfully!");
    navigate("/");
  };

  const AddToCartHandler = (id) => {
    // Safely create deep copy of user and cart
    const updatedUser = {
      ...users,
      cart: users.cart ? [...users.cart] : [],
    };

    const index = updatedUser.cart.findIndex((item) => item.productId === id);

    if (index === -1) {
      updatedUser.cart.push({ productId: id, quantity: 1 });
    } else {
      updatedUser.cart[index] = {
        ...updatedUser.cart[index],
        quantity: updatedUser.cart[index].quantity + 1,
      };
    }
    dispatch(asyncupdateuser(updatedUser.id, updatedUser));
  };

  const UpdateCartHandler = (id, delta) => {
    const updatedUser = {
      ...users,
      cart: users.cart
        .map((item) =>
          item.productId === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0), // remove if quantity is 0
    };

    dispatch(asyncupdateuser(updatedUser.id, updatedUser));
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-xl">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 px-6">
      <button
        onClick={() => navigate("/")}
        className="text-sm text-blue-400 hover:underline mb-6"
      >
        ← Back to Products
      </button>
      <div
        className={`${
          users?.isAdmin
            ? "grid md:grid-cols-2 w-[80%]"
            : "flex flex-col items-center max-w-2xl"
        } mx-auto gap-10 bg-gray-800 p-8 rounded-xl shadow-xl`}
      >
        {/* LEFT: Product Details */}
        <div className="flex flex-col h-full space-y-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain bg-gray-100 rounded-lg"
          />
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-300">{product.description}</p>
          <p className="text-blue-400 text-xl font-semibold">
            ${product.price}
          </p>
          <span className="text-sm w-fit bg-gray-700 px-2 py-1 rounded">
            {product.category}
          </span>

          <div className="mt-auto">
            {!cartItem ? (
              <button
                onClick={
                  users
                    ? () => AddToCartHandler(product.id)
                    : () => navigate("/login")
                }
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <button
                  onClick={() => UpdateCartHandler(product.id, -1)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  -
                </button>
                <span className="text-white font-semibold">
                  {cartItem.quantity}
                </span>
                <button
                  onClick={() => UpdateCartHandler(product.id, 1)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
            )}
            {/* <button
              onClick={() => AddToCartHandler(product.id)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button> */}
          </div>
        </div>

        {/* RIGHT: Update Form */}
        {users?.isAdmin && (
          <div className="flex flex-col gap-4">
            <form
              onSubmit={handleSubmit(UpdateProductHandler)}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-4">Update Product</h3>

              <div>
                <label className="block mb-1">Title</label>
                <input
                  {...register("title", { required: "Title is required" })}
                  className="w-full p-2 rounded bg-gray-200 text-black"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1">Price</label>
                <input
                  type="number"
                  step="0.01"
                  {...register("price", { required: "Price is required" })}
                  className="w-full p-2 rounded bg-gray-200 text-black"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1">Description</label>
                <textarea
                  rows="4"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="w-full p-2 rounded bg-gray-200 text-black"
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1">Category</label>
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="w-full p-2 rounded bg-gray-200 text-black"
                />
                {errors.category && (
                  <p className="text-red-500 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1">Image URL</label>
                <input
                  {...register("image", { required: "Image URL is required" })}
                  className="w-full p-2 rounded bg-gray-200 text-black"
                />
                {errors.image && (
                  <p className="text-red-500 text-sm">{errors.image.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-medium transition"
              >
                Update Product
              </button>
            </form>
            <button
              type="button"
              onClick={DeleteProductHandler}
              className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-medium transition hover:bg-red-700"
            >
              Delete Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
