import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import "./assets/font/font.css";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Orders from "./components/DashboardPages/Orders";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Product from "./pages/Product";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Dashboard from "./pages/Dashboard";
import Collection from "./components/DashboardPages/Collection";
import Payment from "./components/DashboardPages/Payment";
import Account from "./components/DashboardPages/Account";
import Settings from "./components/DashboardPages/Settings";
import Support from "./components/DashboardPages/Support";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import Collections from "./pages/Collections";
import { PersistGate } from "redux-persist/integration/react";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
          <Route path="/cart" element={<Cart />} />;
          <Route path="/collections" element={<Collections />} />;
          <Route path="/favorites" element={<Favorites />} />;
          <Route path="*" element={<NotFound />} />
          <Route
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route
              path="/dashboard/collection"
              element={
                <ProtectedRoute>
                  <Collection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/myorders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/mypayment"
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/myaccount"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/support"
              element={
                <ProtectedRoute>
                  <Support />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
