import NavBar from "./components/NavBar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="py-5 px-[10%] w-screen h-screen text-white font-thin bg-gray-800 ">
      <NavBar />
      <MainRoutes />
    </div>
  );
};

export default App;
