import React from "react";
import "./TestimonialSlider.css";
import RatingIcon from "../../../Asset/images/Rating Icon.png";
export default function TestimonialSlider() {
  return (
    <div className="Testimonials-Slider">
      <div className="Testimonial">
        <div>
          <img src={RatingIcon} alt="" />
        </div>
        <div className="Testimonial-Text ">
          <h1>
            Pellentesque etiam blandit in tincidunt at donec. Eget <br></br>
            ipsum dignissim placerat nisi, adipiscing mauris non.
          </h1>
        </div>
      </div>
      <div className="Testimonial">
        <div>
          <img src={RatingIcon} alt="" />
        </div>
        <div className="Testimonial-Text ">
          <h1>
            Pellentesque etiam blandit in tincidunt at donec. Eget
            <br></br>ipsum dignissim placerat nisi, adipiscing mauris non.
          </h1>
        </div>
      </div>
      <div className="Testimonial">
        <div>
          <img src={RatingIcon} alt="" />
        </div>
        <div className="Testimonial-Text ">
          <h1>
            Pellentesque etiam blandit in tincidunt at donec. Eget
            <br></br>ipsum dignissim placerat nisi, adipiscing mauris non.
          </h1>
        </div>
      </div>
    </div>
  );
}
