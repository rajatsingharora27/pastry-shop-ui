import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MiddleSection from "./components/MiddleSection/MiddleSection";
import HomePageCollection from "./components/HomePageCollections/HomePageCollection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import ProductPage from "./pages/Product/ProductPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageCollection />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<h1>404 Error</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
