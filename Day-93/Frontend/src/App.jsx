import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/userActions";
// import { asyncloadproducts } from "./store/actions/productActions";
import { ToastContainer } from "react-toastify";

const App = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  // const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    !users && dispatch(asynccurrentuser());
  }, [users]);

  // useEffect(() => {
  //   products.length == 0 && dispatch(asyncloadproducts());
  // }, [products]);

  return (
    <div className="text-white bg-gray-800 w-screen">
      <ToastContainer />
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
