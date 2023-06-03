import React from "react";
import Navbar from "../../Componet/Header/Navbar/Navbar";
import FooterBar from "../../Componet/Footer/FooterBar";
import "./ServicePage.css";
import ServiceImage from "../../Asset/ServiceImage.png";
import { HiArrowLongRight } from "react-icons/hi2";

export default function ServicePage() {
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
        <div className="ProductsService">
          <img src={ServiceImage} alt="ServiceImage" />
        </div>
        <div className=" ProductSerivceIteam">
          <div className=" SerivceIteam">
            <div className="Iteams">
              <h1>01</h1>
              <h2>Furniture</h2>
              <h3>
                At the ultimate smart home, you're met with technology before
                you even step through the front door.
              </h3>
            </div>
            <div className="Iteams">
              <h1>02</h1>
              <h2>Home Decoration</h2>
              <h3>
                Create A Calming Summer Escape With Our Luxurious Home
                Accessories For The Balmy Evenings.
              </h3>
            </div>
            <div className="Iteams">
              <h1>03</h1>
              <h2>Kitchen Cabinet</h2>
              <h3>
                Introducing the modular kitchen cabinet system. Start with our
                huge selection of base and wall cabinets.
              </h3>
            </div>
            <div className="Iteams2">
              <h1>04</h1>
              <h2>Interior Design</h2>
              <h3>
                Innovative products often feature innovative designs that play
                with the patterns we are familiar.
              </h3>
            </div>
            <div className="Iteams2">
              <h1>05</h1>
              <h2>Exterior Design</h2>
              <h3>
                These stylish and resilient products provide up-to-date options
                for roofing, siding, decking, and outdoor spaces.
              </h3>
            </div>
            <div className="Iteams2">
              <h1>06</h1>
              <h2>Custom Furniture</h2>
              <h3>
                With Quality Materials and Modern Designs, we have Designs for
                all Tastes. we bring you World Class Designs.
              </h3>
            </div>
          </div>
        </div>

        <div className=" ProductSerivcePortofolio">
          <div>
            <h3>Portofolio</h3>
            <h1>Amazing project we’ve done before</h1>
          </div>
          <div>
            <h4>
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.
            </h4>
            <button className="bbtn">View Portofolio</button>
          </div>
        </div>
        <div className=" ServiceDisplayBox">
          <div className="ServiceDisplay">
            <div className="DisplayText">
              <h1>Siska Kohl’s Bedroom</h1>
              <h3>
                We start renovating her bedroom with minimalist concept and
                using combination white and wooden material
              </h3>
              <h2>See Detail</h2>
            </div>
          </div>
          <div className="ServiceDisplay2Box">
            <div className="ServiceDisplay1">
              <div className="DisplayText1">
                <h1>Jeruk Veldevana Living Room Design</h1>
                <h3>
                  We start renovating her bedroom with minimalist concept and
                  using combination white and wooden material
                </h3>
                <h2>See Detail</h2>
              </div>
            </div>
            <div className="ServiceDisplay2">
              <div className="DisplayText2">
                <h1>Cozy Co-working space</h1>
                <h3>
                  We start renovating her bedroom with minimalist concept and
                  using combination white and wooden material
                </h3>
                <h2>See Detail</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="SeriveWriteup">
          <div className="Writeup">
            <h1>Are you interested work with us?</h1>
          </div>
          <div>
            <button>
              <h2>Let’s Talk</h2>
              <span className="icon">
                <HiArrowLongRight />
              </span>
            </button>
          </div>
        </div>
      </div>

      <FooterBar />
    </div>
  );
}
