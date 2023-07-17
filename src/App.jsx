import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MiddleSection from "./components/MiddleSection/MiddleSection";
import HomePageCollection from "./components/HomePageCollections/HomePageCollection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import ProductPage from "./pages/Product/ProductPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ContactPage from "./pages/Contact/ContactPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageCollection />} />
          <Route path="/about" element={<About />} />
          <Route path="/cakes" element={<CategoryPage />} />
          <Route path="/savory" element={<CategoryPage />} />
          <Route path="/pastry" element={<CategoryPage />} />
          <Route path="/gift-hampers" element={<CategoryPage />} />
          <Route path="/cookies" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<h1>404 Error</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
