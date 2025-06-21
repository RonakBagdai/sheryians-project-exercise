import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-5xl font-thin mb-5">Services</h1>
      <div className="mb-10">
        <h1 className="text-3xl font-thin mb-4">Service 1</h1>
        <button
          onClick={() => navigate("/service/detail")}
          className="bg-white text-black px-4 py-2 rounded"
        >
          See Details
        </button>
        <hr className="mt-5" />
        <Outlet />
      </div>
    </div>
  );
};

export default Service;
