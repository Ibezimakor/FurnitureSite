import React from "react";
import "./FunitureArtcles.css";

import ArtclesImage from "../../../Asset/images/Artcles Image.png";
import ArtclesideImage from "../../../Asset/images/Artcleside Image.png";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function FunitureArtcles() {
  return (
    <section className="FunitureArtcles">
      <div className="ArtcleSideBar1">
        <div>
          ,<h2>Artcles</h2>
          <h1>
            The best furniture comes <br></br> from Lalasia
          </h1>
          <h3>Pellentesque etiam blandit in tincidunt at donec.</h3>
        </div>
        <div>
          <div>
            <img src={ArtclesImage} alt="Funiture Artcles discrption" />
          </div>
          <div className="button">
            <button className="arrow-btn1">
              <HiOutlineArrowLongLeft />
            </button>
            <button className="arrow-btn2">
              <HiOutlineArrowLongRight />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="ArtcleSideBar2">
          <div>
            <img src={ArtclesideImage} alt="Funiture" />
          </div>
          <div className="ArtcleWrite">
            <h3>Tips and Trick</h3>
            <h1>
              6 ways to give your home
              <br></br>minimalistic vibes
            </h1>
            <h4>Pellentesque etiam blandit in tincidunt at donec.</h4>
          </div>
          <div />
        </div>
        <div className="ArtcleSideBar2">
          <div>
            <img src={ArtclesideImage} alt="Funiture" />
          </div>
          <div className="ArtcleWrite">
            <h3>Tips and Trick</h3>
            <h1>
              6 ways to give your home <br></br> minimalistic vibes
            </h1>
            <h4>Pellentesque etiam blandit in tincidunt at donec.</h4>
          </div>
          <div />
        </div>
        <div className="ArtcleSideBar2">
          <div>
            <img src={ArtclesideImage} alt="Funiture" />
          </div>
          <div className="ArtcleWrite">
            <h3>Tips and Trick</h3>
            <h1>
              6 ways to give your home<br></br>
              minimalistic vibes
            </h1>
            <h4>Pellentesque etiam blandit in tincidunt at donec.</h4>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
}
