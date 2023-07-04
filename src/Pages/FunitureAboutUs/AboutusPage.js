import React from "react";
import Navbar from "../../Componet/Header/Navbar/Navbar";
import FooterBar from "../../Componet/Footer/FooterBar";
import ServiceVideo from "../../Asset/images/Service video.png";
import Phone from "../../Asset/images/call-received.png";
import Message from "../../Asset/images/messages.png";
import vector from "../../Asset/images/Vector.png";
import { HiArrowLongRight } from "react-icons/hi2";

import "./funitureAboutUs.css";
import StafTeam from "./StafsWorks/StafTeam";

export default function AboutUsPage() {
  return (
    <section>
      <Navbar />
      <div>
        <div className="Production_Service">
          <h1>About Us</h1>
          <h3>
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item
          </h3>
        </div>
        <div className=" Service_Video">
          <img src={ServiceVideo} alt=" Service Video" />
        </div>
        <div className="Service_Rating_box">
          <div className="Rating_Box">
            <div className="Service_Aim">
              <h2>Our Mission</h2>
              <h1>Our team dedicated to help find smart home product</h1>
            </div>
            <div className="Service_Rating">
              <div>
                <h1>20+</h1>
                <h3>Years Experience</h3>
              </div>
              <div>
                <h1>483</h1>
                <h3>Happy Client</h3>
              </div>
              <div>
                <h1>150+</h1>
                <h3>Project Finished</h3>
              </div>
            </div>
          </div>
          <div className="Service_Contect_Box">
            <div className="Service_Contect-Icon">
              <img src={Phone} alt="" />
            </div>
            <div className="Service_Contect_Text1">
              <h1>24/7 Supports</h1>
              <h3>
                24/7 support means a support service that is provided 24 hours a
                day and 7 days a week.
              </h3>
            </div>
            <div className="Service_Contect-Icon">
              <img src={Message} alt="" />
            </div>
            <div className="Service_Contect_Text2">
              <h1>Free Consultation</h1>
              <h3>
                A free consultation is a one-on-one interaction or conversation
                given freely to share one's thoughts
              </h3>
            </div>
            <div className="Service_Contect-Icon">
              <img src={vector} alt="" />
            </div>
            <div className="Service_Contect_Text3">
              <h1>Overall Guarantee</h1>
              <h3>
                The comprehensive guarantee is required for import, warehousing,
                transit, processing and specific use.
              </h3>
            </div>
          </div>
        </div>
        <div className="Company_TeamAim">
          <div className="Team_Aim">
            <h2>Our Team</h2>
            <h1>Meet our leading and strong team</h1>
          </div>
          <div className="Team_Goal">
            <h3>
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </h3>
          </div>
        </div>
      </div>
      <StafTeam />
      <div className="AboutUSWriteup">
        <div className="Writeup">
          <h1>Are you interested work with us?</h1>
        </div>
        <div>
          <button>
            <h2>Let’s Talk</h2>
            <span className="Icon">
              <HiArrowLongRight />
            </span>
          </button>
        </div>
      </div>
      <FooterBar />
    </section>
  );
}
