import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log(token);
 if (!token) {
   return <Navigate to="/login" />;
 } else {
   return children;
 }
};

export default ProtectedRoute;
