import React from "react";
import "./StafTeam.css";
import Jesse_Depp from "../../../Asset/Images2/Jesse Depp.png";

export default function StafTeam() {
  return (
    <section>
      <div className="Team_Card_Box">
        <div className="Team_Card_Wrapper">
          <div>
            <div>
              <img src={Jesse_Depp} alt="" />
            </div>
            <div className="Team_Position">
              <h1>Jesse Depp</h1>
              <h2>Founder & CEO</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
