import { Route, Routes } from "react-router-dom";

import { lazy } from "react";
const Cart = lazy(() => import("../pages/Cart.jsx"));
const AuthWrapper = lazy(() => import("./AuthWrapper.jsx"));
const UnAuthWrapper = lazy(() => import("./UnAuthWrapper.jsx"));
const PageNotFound = lazy(() => import("../pages/PageNotFound.jsx"));
const UserProfile = lazy(() => import("../pages/user/UserProfile.jsx"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails.jsx"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Products = lazy(() => import("../pages/Products.jsx"));

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route
        path="/login"
        element={
          <UnAuthWrapper>
            <Login />
          </UnAuthWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <UnAuthWrapper>
            <Register />
          </UnAuthWrapper>
        }
      />

      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        }
      />
      <Route
        path="/product/:id"
        element={
          <AuthWrapper>
            <ProductDetails />
          </AuthWrapper>
        }
      />

      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
