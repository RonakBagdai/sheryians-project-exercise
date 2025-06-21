import { Route, Routes } from "react-router-dom";
import About from "../Component/About";
import Home from "../Component/Home";
import Product from "../Component/Product";
import Service from "../Component/Service";
import ProductDetails from "../Component/ProductDetails";
import ServiceDetails from "../Component/ServiceDetails";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<ProductDetails />} />
      <Route path="/service" element={<Service />}>
        <Route path="/service/detail" element={<ServiceDetails />} />
      </Route>

      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
