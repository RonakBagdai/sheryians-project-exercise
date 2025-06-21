import axios from "../../api/axiosconfig";
import { loadProduct } from "../reducers/productSlice";

export const asynccreateproduct = (product) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/products", product);
    dispatch(asyncloadproducts());
    // console.log("Product created successfully:", response.data);
  } catch (error) {
    console.error("Error creating product:", error);
  }
};

export const asyncloadproducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("/products");
    dispatch(loadProduct(response.data));
    // console.log("Products loaded successfully:", response.data);
  } catch (error) {
    console.error("Error loading products:", error);
  }
};

export const asyncupdateproduct =
  (id, product) => async (dispatch, getState) => {
    try {
      const response = await axios.patch(`/products/${id}`, product);
      dispatch(asyncloadproducts());
      // console.log("Product updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/products/${id}`);
    dispatch(asyncloadproducts());
    // console.log("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
