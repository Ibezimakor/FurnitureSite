import React from "react";
import "./ProductDetailsPage.css";

import Navbar from "../../Componet/Header/Navbar/Navbar";
import FooterBar from "../../Componet/Footer/FooterBar";
import whiteChair from "../../Asset/White Aesthetic Chair.png";
import WoodClock from "../../Asset/Wooden Aesthetic Clock.png";
import WoodMirror from "../../Asset/Wooden Mirror.png";

export default function DetailsPage() {
  return (
    <div>
      <Navbar />
      <div className="ProductView">
        <div>
          <img src={whiteChair} alt="" />
        </div>
        <div className="ProductView-Description">
          <h1>White Aesthetic Chair</h1>
          <h4>Combination of wood and wool</h4>
          <h6>Color</h6>
          {/* ==============================BOXING COLOR
          ====================================== */}
          <div className="BoxingColor">
            <button className="A"></button>
            <button className="B"></button>
            <button className="C"></button>
            <button className="D"></button>
          </div>
          {/* ==================================================================END
          OF BOXING COLOR ======================================================
           */}
          <h2>
            Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
            facilisis facilisis ligula felis et a parturient aenean. Ac maecenas
            ultricies felis risus scelerisque duis posuere...
            <span> Read More </span>
          </h2>
          <h1 className="Price">$99.98</h1>
          <div className="buttonTag">
            <button className="btn1">Buy Now</button>
            <button className=" btn2"> Add to Chart </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="RelatedItems">Related Items</h1>
        <div className="RelatedBox">
          <div className="Related-container">
            <div className="RelatedCard">
              <div>
                <img src={WoodClock} alt="" />
              </div>
              <h5>Decoration</h5>
              <h1>Wooden Aesthetic Clock</h1>
              <h4>Combination of wood and wool</h4>
              <h2>$58.39</h2>
            </div>
            <div className="RelatedCard">
              <div>
                <img src={WoodClock} alt="" />
              </div>
              <h5>Decoration</h5>
              <h1>Wooden Aesthetic Clock</h1>
              <h4>Combination of wood and wool</h4>
              <h2>$58.39</h2>
            </div>
            <div className="RelatedCard">
              <div>
                <img src={WoodClock} alt="" />
              </div>
              <h5>Decoration</h5>
              <h1>Wooden Aesthetic Clock</h1>
              <h4>Combination of wood and wool</h4>
              <h2>$58.39</h2>
            </div>
            <div className="RelatedCard">
              <div>
                <img src={WoodMirror} alt="" />
              </div>
              <h5>Decoration</h5>
              <h1>Wooden Aesthetic Clock</h1>
              <h4>Combination of wood and wool</h4>
              <h2>$58.39</h2>
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
}
