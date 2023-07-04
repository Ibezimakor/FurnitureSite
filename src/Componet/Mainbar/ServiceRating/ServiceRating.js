import React from "react";
import "./ServiceRating.css";
import Affordable from "../../../Asset/images/Affordable Price.png";
import Fast from "../../../Asset/images/Fast and on time.png";
import Many from "../../../Asset/images/Many choices.png";

export default function ServiceRating() {
  return (
    <div className="Rating">
      <div className="RatingService">
        <div className="Rating-Image">
          <img src={Many} alt="" />
        </div>
        <h1>Many Choices</h1>
        <h2>
          Pellentesque etiam blandit in tincidunt <br />
          at donec. Eget ipsum dignissim placerat <br />
          nisi, adipiscing mauris non.
        </h2>
      </div>
      <div className="RatingService">
        <div className="Rating-Image">
          {" "}
          <img src={Fast} alt="" />
        </div>
        <h1>Fast and On Time</h1>
        <h2>
          Pellentesque etiam blandit in tincidunt
          <br />
          at donec. Eget ipsum dignissim placerat <br />
          nisi, adipiscing mauris non.
        </h2>
      </div>
      <div className="RatingService">
        <div className="Rating-Image">
          <img src={Affordable} alt="" />
        </div>
        <h1>Affordable Price</h1>
        <h2>
          Pellentesque etiam blandit in tincidunt <br />
          at donec. Eget ipsum dignissim placerat <br />
          nisi, adipiscing mauris non.
        </h2>
      </div>
    </div>
  );
}
