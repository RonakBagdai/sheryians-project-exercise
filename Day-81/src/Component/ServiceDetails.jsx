import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const NavigateHandler = () => {
    navigate("/service");
  };
  return (
    <div className="mt-10">
      <h1 className="text-5xl font-thin mb-5">More Services</h1>

      <h2 className="text-3xl font-thin mb-4">choose us...</h2>
      <p className="mb-4">
        This product is designed to meet your needs and exceed your
        expectations.
      </p>

      <button
        onClick={NavigateHandler}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ServiceDetails;
