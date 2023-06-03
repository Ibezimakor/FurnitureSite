import React from "react";
import "./Navbar.css";
import Logo from "../../../Asset/Funiture-Logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Funiture-Navbar">
      <NavLink to="/">
        <div className="Funiture-Logo">
          <img src={Logo} alt="Funiture-Logo" />
        </div>
      </NavLink>

      <div className="Funiture-Menulist">
        <li>
          <NavLink to="/Product"> Product</NavLink>
        </li>
        <li>
          <NavLink to="/Service"> Service</NavLink>
        </li>
        <li>
          <NavLink to="/Article"> Article</NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs"> About Us</NavLink>
        </li>
      </div>

      <div className="Funiture-Account-icon">
        <NavLink>
          <HiOutlineShoppingBag />
        </NavLink>

        <NavLink>
          <BsPerson />
        </NavLink>
      </div>
    </nav>
  );
}
