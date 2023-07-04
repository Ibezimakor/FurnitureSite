import React from "react";
import "./Footer.css";
import Logo from "../../Asset/images/Funiture-Logo.png";
import { NavLink } from "react-router-dom";

export default function FooterBar() {
  return (
    <footer className="Footer">
      <div className="Footer_Discrition">
        <div className="Footer_Logo">
          <NavLink to="/">
            <div>
              <img src={Logo} alt="Funiture Logo" />
            </div>
          </NavLink>
          <div>
            <h2>
              Lalasia is digital agency that help you make better
              <br></br> experience iaculis cras in.
            </h2>
          </div>
        </div>

        <div className="Footer_Menu">
          <div>
            <h1>Product</h1>
            <ul>
              <li>New Arrivails</li>
              <li>Best Selling</li>
              <li>Home Decor</li>
              <li>Kitchen Set</li>
            </ul>
          </div>
          <div>
            <h1>Service</h1>
            <ul>
              <li>Catalog</li>
              <li>Blog</li>
              <li>FaQ</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h1>Follow Us</h1>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Home Decor</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
