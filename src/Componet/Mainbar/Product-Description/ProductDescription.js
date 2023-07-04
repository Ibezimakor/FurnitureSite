import React from "react";
import "./ProductDescription.css";
import WorkSample from "../../../Asset/images/WorkSmaple.png";
import WorkSample2 from "../../../Asset/images/WorkSmaple 2.png";

export default function ProductDescription() {
  return (
    <div className="Product-DescriptionIteam">
      <div className="Product-Description">
        <div>
          <h2> Our Product</h2>
          <h1>
            {" "}
            Crafted by talented and <br></br>high quality material
          </h1>
          <h3>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            <br></br>
            dignissim placerat nisi, adipiscing mauris non purus parturient.
            <br></br>
            morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
          </h3>
          <button className="Product-btn">
            <h2>Learn More</h2>
          </button>
        </div>
        <img className="WorkSample-Image" src={WorkSample} alt="" />
      </div>
      <div>
        <div className="Product-Description2"></div>

        <div className="Description">
          <div>
            <h1>20+</h1>
            <h2>Years Experience</h2>
          </div>
          <div>
            <h1>483</h1>
            <h2>Happy Client</h2>
          </div>
          <div>
            <h1>150+</h1>
            <h2>Project Finished</h2>
          </div>
        </div>
        <img className="WorkSample-Image2" src={WorkSample2} alt="" />
      </div>
    </div>
  );
}
