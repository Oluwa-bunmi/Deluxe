import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import "./assets/font/font.css";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Collection from "./pages/Collection";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Product from "./pages/Product";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />;
      <Route path="/login" element={<Login />} />;
      <Route path="/forgot-password" element={<ForgotPassword />} />;
      <Route path="/create-new-password" element={<NewPassword />} />;
      <Route path="/" element={<Home />} />;
      <Route path="/about-us" element={<About />} />;
      <Route path="/contact-us" element={<Contact />} />;
      <Route path="/product" element={<Product />} />;
      <Route path="/privacy-policy" element={<Privacy />} />;
      <Route path="/terms-and-conditions" element={<Terms />} />;
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Collection />
          </ProtectedRoute>
        }
      />
      ;
    </Routes>
  );
}

export default App;
