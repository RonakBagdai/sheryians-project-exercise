import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";
import { toast } from "react-toastify";

const Cart = () => {
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  const cartItems = users.cart || [];

  const handleQuantityChange = (productId, delta) => {
    const updatedCart = cartItems
      .map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter((item) => {
        if (item.quantity <= 0) {
          const removedProduct = getProductDetails(item.productId);
          toast.info(`${removedProduct.title} removed from cart`);
          return false;
        }
        return true;
      });

    dispatch(
      asyncupdateuser(users.id, {
        ...users,
        cart: updatedCart,
      })
    );
  };

  const handleRemove = (productId) => {
    const product = getProductDetails(productId);
    toast.info(`${product.title} removed from cart`);

    const updatedCart = cartItems.filter(
      (item) => item.productId !== productId
    );

    dispatch(
      asyncupdateuser(users.id, {
        ...users,
        cart: updatedCart,
      })
    );
  };

  const getProductDetails = (id) => products.find((p) => p.id === id);

  const total = cartItems.reduce((acc, item) => {
    const product = getProductDetails(item.productId);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-600">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-100">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => {
          const product = getProductDetails(item.productId);
          return (
            <div
              key={item.productId}
              className="flex items-center bg-white rounded-lg shadow p-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-contain"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
                <div className="flex items-center mt-2 gap-2">
                  <button
                    onClick={() => handleQuantityChange(item.productId, -1)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.productId, 1)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.productId)}
                className="text-red-500 font-medium ml-4"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-6 text-right text-xl font-bold text-gray-100">
        Total: ${total.toFixed(2)}
      </div>
      <div className="mt-4 text-right">
        <Link
          to="/checkout"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
