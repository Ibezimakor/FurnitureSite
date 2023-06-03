import React from "react";
import Navbar from "../../Componet/Header/Navbar/Navbar";
import FooterBar from "../../Componet/Footer/FooterBar";
import "./funitureAboutUs.css";
export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="Production-Service">
          <h1>Services</h1>
          <h3>
            The product crafted by talented crafter and using high quality
            material with love inside
          </h3>
        </div>
      </div>
      <FooterBar />
    </div>
  );
}
