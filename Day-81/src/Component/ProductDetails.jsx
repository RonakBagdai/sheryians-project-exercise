import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const NavigateHandler = () => {
    navigate("/product");
  };
  const params = useParams();
  return (
    <div className="mt-10">
      {/* <h1>Product Name</h1>
      <p>Product Description</p> */}
      <h1 className="text-5xl font-thin mb-5">Product Details</h1>

      <h2 className="text-3xl font-thin mb-4">{params.name}</h2>
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

export default ProductDetails;
