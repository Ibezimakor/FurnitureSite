import React from "react";
import "./Trending.css";
import { FiFilter } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";

import Trendingframe from "../../../Asset/images/Artcle frame 1.png";
import go from "../../../Asset/images/Artcles Image.png";
export default function Trending() {
  return (
    <section>
      <div className="Trending">
        <h3>Trending Topics</h3>
        <h1>Popular last week</h1>
      </div>
      <div className="Trending_Menu">
        <div>
          <ul>
            <li>All</li>
            <li>Tips and Trick</li>
            <li>Interior Design</li>
            <li>Design Inspiration</li>
            <li>Color Guide</li>
          </ul>
        </div>
        <div className="Trending_Filter">
          <button className="Trending_bbtn">
            <FiFilter /> Filter
          </button>
        </div>
      </div>

      <div className="Trending_Display_Container">
        <div className="Trending_Display_Box">
          <div className="Trending_Display_Image">
            <img src={go} alt="" />
          </div>
          <div>
            <div className="Trending_Display_Text">
              <h3>Tips and Trick</h3>
              <h1>Beautiful and Functional Home Terrace Decoration</h1>
              <h2>
                Home terrace decorations are part of every decoration or overall
                home design. Interiordesign.id – If by chance your house has
                enough space or space.
              </h2>
            </div>

            <div className="Trending_Card_Owner">
              <img src={Trendingframe} alt="" />
              <h1>
                By Morgan Goldberg
                <span className="Trending_Card_Date">Friday, 1 April 2022</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="Trending_Display_Box">
          <div className="Trending_Display_Image">
            <img src={go} alt="" />
          </div>
          <div>
            <div className="Trending_Display_Text">
              <h3>Design Inspiration</h3>
              <h1>
                Modern Minimalist Home Design: Aesthetics of Modern Home
                Interiors
              </h1>
              <h2>
                Home terrace decorations are part of every decoration or overall
                home design. Interiordesign.id – If by chance your house has
                enough space or space.
              </h2>
            </div>

            <div className="Trending_Card_Owner">
              <img src={Trendingframe} alt="" />
              <h1>
                By Rizal Ahmad
                <span className="Trending_Card_Date">
                  Wednesday, 17 March 2022
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="Trending_Display_Box">
          <div className="Trending_Display_Image">
            <img src={go} alt="" />
          </div>
          <div>
            <div className="Trending_Display_Text">
              <h3>Color Guide</h3>
              <h1>
                20+ Best Kitchen Paint Colors That Make Kitchen Spaces Look More
                Fun
              </h1>
              <h2>
                Home terrace decorations are part of every decoration or overall
                home design. Interiordesign.id – If by chance your house has
                enough space or space.
              </h2>
            </div>

            <div className="Trending_Card_Owner">
              <img src={Trendingframe} alt="" />
              <h1>
                By Filipus Pendi
                <span className="Trending_Card_Date">
                  Saturday, 29 February 2022
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="Trending_More_Box">
        <button className="Trending_More">
          <h1>Load More</h1>
        </button>
      </div>
      <div className="Trending_Subcription">
        <div>
          <h1>Subscribe our newsletter</h1>
        </div>
        <button className="Trending_Subcription_btn">
          <h2>Let’s Talk</h2>
          <span className="Trending_Subcription_btn_Icon">
            <HiArrowLongRight />
          </span>
        </button>
      </div>
    </section>
  );
}
