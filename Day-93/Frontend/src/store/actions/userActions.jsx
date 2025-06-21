import axios from "../../api/axiosconfig";
import { loadUser, removeuser } from "../reducers/userSlice";

export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch(`/users/${id}`, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asynccurrentuser());
  } catch (error) {
    console.error("Error updating user:", error);
  }
};
export const asynccurrentuser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loadUser(user));
    } else {
      console.log("User not logged in");
    }
  } catch (error) {
    console.error("Error fetching current user:", error);
  }
};

export const asynclogoutuser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser(null)); // Clear user state in Redux
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Error logging out user:", error);
  }
};

export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("user", JSON.stringify(response.data[0]));
    dispatch(asynccurrentuser());
  } catch (error) {
    console.error("Error logging in user:", error);
  }
};

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/users", user);
    console.log(response.data);
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const asyncdeleteuser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/users/${id}`);
    dispatch(asynclogoutuser());
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
