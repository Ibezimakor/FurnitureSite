import React from "react";
import Navbar from "../../Componet/Header/Navbar/Navbar";
import FooterBar from "../../Componet/Footer/FooterBar";
import ProductImageDisplay from "../../Asset/images/Product display image.png";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";

import "./ProductPage.css";
import Productiteams from "../ProductItems/Productiteams";

export default function ProductPage() {
  return (
    <div>
      <Navbar />

      <div>
        <div>
          <div className="Production-Display">
            <h1>Product</h1>
            <h3>
              We display products based on the latest products we have, if you
              want to see our old products please enter the name of the item
            </h3>
          </div>
          <div className="ProductslideDisplay">
            <img src={ProductImageDisplay} alt="" />
          </div>
          <div className="ProductslideDisplayArticle">
            <h2>Discount</h2>
            <h1>Ramadhan Sale Offer</h1>
            <h3>Get 40% off for the first transaction on Lalasia</h3>
          </div>
        </div>
        <div className="ProductSearch-Container">
          <div className="ProductSearchBar">
            <div className="ProductSearchBar2">
              <CiSearch />
              <input type="text" placeholder="Search Property......" />
            </div>
            <div>
              <button className="Productbutton-bnt">Find Now</button>
            </div>
          </div>
          <div className="productFind">
            <button className="bbtn">
              <FiFilter /> Filter
            </button>
          </div>
        </div>
        <div className="TotalProduct">
          <div className="TotalProductText">
            <h1>Total Product</h1> <span>184</span>
          </div>
          <div>
            <button className="SortBnt">Sort By</button>
          </div>
        </div>
      </div>

      <Productiteams />
      <FooterBar />
    </div>
  );
}
