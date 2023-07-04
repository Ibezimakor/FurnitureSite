import React from "react";
import "./App.css";
// {
/* Imported Documents from Components */
// }

import Navbar from "./Componet/Header/Navbar/Navbar";
import HeaderText from "./Componet/Mainbar/Header/HeaderText";
import Backgroud from "./Componet/Mainbar/Mini-Backgroud/Backgroud";
import OurService from "./Componet/Mainbar/OurService/OurService";
import Product from "./Componet/Mainbar/Product/Product";
import ProductList from "./Componet/Mainbar/ProductList/ProductList";
import ProductDescription from "./Componet/Mainbar/Product-Description/ProductDescription";
import TestimonialSlider from "./Componet/Mainbar/TestimonialSlider/TestimonialSlider";
import Testimonials from "./Componet/Mainbar/Testimonials/Testimonials";
import FunitureArtcles from "./Componet/Mainbar/FunitureArtcles/FunitureArtcles";
import FooterBar from "./Componet/Footer/FooterBar";
import Join from "./Componet/Mainbar/Join/Join";
import SearchBar from "./Componet/Mainbar/Searchbar/SearchBar";

// {
/* End Imported Documents from Components */
// }

export default function App() {
  return (
    <div>
      <Navbar />
      <HeaderText />
      <SearchBar />
      <Backgroud />
      <OurService />
      <Product />
      <ProductList />
      <ProductDescription />
      <Testimonials />
      <TestimonialSlider />
      <FunitureArtcles />
      <Join />
      <FooterBar />
    </div>
  );
}
