import React from "react";
import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="SearchBar2">
        <CiSearch />
        <input type="text" placeholder="Search Property......" />
      </div>
      <div>
        <button className="button-bnt">Search</button>
      </div>
    </div>
  );
}
