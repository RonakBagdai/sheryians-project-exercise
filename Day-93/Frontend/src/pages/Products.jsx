import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";
import { lazy, Suspense } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from "react-toastify";
const ProductCard = lazy(() => import("../pages/ProductCard"));
import useInfiniteProducts from "../utils/useInfiniteProducts";

const ProductSkeleton = () => (
  <div className="bg-white rounded-xl shadow-md p-4 space-y-4 animate-pulse">
    <div className="h-48 bg-gray-300 rounded-lg"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-3 bg-gray-200 rounded w-full"></div>
    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
  </div>
);

const Products = () => {
  const { products, hasMore, loading, fetchProducts } = useInfiniteProducts();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const Navigate = useNavigate();

  const AddtoCartHandler = (id) => {
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
    toast.success("Product added to cart");
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

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-3xl font-bold text-gray-100 mb-6">Our Products</h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <ProductSkeleton key={idx} />
          ))}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={products.length}
          next={fetchProducts}
          hasMore={hasMore}
          loader={
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <ProductSkeleton key={idx} />
              ))}
            </div>
          }
          endMessage={
            <p className="text-gray-400 mt-6 text-center">
              🎉 No more products to show.
            </p>
          }
        >
          <Suspense
            fallback={
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <ProductSkeleton key={idx} />
                ))}
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  users={users}
                  AddtoCartHandler={AddtoCartHandler}
                  UpdateCartHandler={UpdateCartHandler}
                  cart={users?.cart || []}
                />
              ))}
            </div>
          </Suspense>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Products;
