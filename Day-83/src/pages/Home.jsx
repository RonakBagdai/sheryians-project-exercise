import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {
  const getProduct = async () => {
    try {
      const response = await axios.get("/products");
      console.log("Products:", response.data);
      // products title : Products Prices
      response.data.products.forEach((product) => {
        console.log(`${product.title} : ${product.price}`);
      });

      // const response = await fetch("https://dummyjson.com/products/1");
      // const data = await response.json();
      // console.log("Product Data:", data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={getProduct}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Fetch Products
      </button>
    </div>
  );
};
export default Home;
