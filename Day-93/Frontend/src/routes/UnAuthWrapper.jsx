import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UnAuthWrapper = ({ children }) => {
  const { users } = useSelector((state) => state.userReducer);

  return !users ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: window.location.pathname }} />
  );
};

export default UnAuthWrapper;
