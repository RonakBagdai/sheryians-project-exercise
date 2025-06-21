import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axiosconfig";
import { loadLazyProduct } from "../store/reducers/productSlice";

const useInfiniteProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=6&_start=${products.length}`
      );
      console.log("Fetched products:", data);
      if (data && data.length > 0) {
        dispatch(loadLazyProduct(data));
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return {
    products,
    hasMore,
    loading,
    fetchProducts,
  };
};

export default useInfiniteProducts;
