import React from "react";
import "./Join.css";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Join() {
  return (
    <section>
      <div className="JoinDescription">
        <div>
          <h1>Join with me to get special discount</h1>
        </div>
        <button className="bbbtn">
          <h2>Learn More</h2>
          <span className="Icon">
            <HiArrowLongRight />
          </span>
        </button>
      </div>
    </section>
  );
}
