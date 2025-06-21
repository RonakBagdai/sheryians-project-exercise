import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({
  product,
  users,
  AddtoCartHandler,
  cart,
  UpdateCartHandler,
}) => {
  const Navigate = useNavigate();
  const cartItem = cart?.find((item) => item.productId === product.id);

  return (
    <div
      key={product.id}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain p-4 bg-gray-100"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {product.title}
          </h3>
          <div className="text-gray-600 text-sm mt-1 h-[3.5rem] overflow-hidden">
            {product.description}
          </div>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-blue-600 font-bold text-lg">
              ${product.price}
            </span>
            <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white">
              {product.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        {!cartItem ? (
          <button
            onClick={
              users
                ? () => AddtoCartHandler(product.id)
                : () => Navigate("/login")
            }
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-between mt-2 bg-gray-100 px-3 py-2 rounded-lg">
            <button
              onClick={() => UpdateCartHandler(product.id, -1)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              -
            </button>
            <span className="text-black font-semibold">
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
      </div>
    </div>
  );
};

export default ProductCard;
