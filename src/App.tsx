import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import PlantDetailPage from "./pages/PlantDetailPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CustomerCarePage from "./pages/CustomerCarePage";
import ServicesPage from "./pages/ServicesPage";
import UserPage from "./pages/UserPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <ToastContainer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<UserPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route
                path="/categories/:categoryName"
                element={<CategoryDetailPage />}
              />
              <Route
                path="/categories/:categoryName/:subcategoryName"
                element={<SubcategoryPage />}
              />
              <Route path="/plant/:plantId" element={<PlantDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/customer-care" element={<CustomerCarePage />} />
              <Route path="/services" element={<ServicesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
