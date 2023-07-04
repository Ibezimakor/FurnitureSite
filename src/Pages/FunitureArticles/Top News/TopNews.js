import React from "react";
import "./TopNews.css";
import Articleframe from "../../../Asset/images/Artcle frame 1.png";
import TopNewsImage from "../../../Asset/images/topnews image 1.png";

export default function TopNews() {
  return (
    <section>
      <div className="TopNews">
        <h3>Daily News</h3>
        <h1>Today top headlines</h1>
      </div>

      <div className="TopNews_Show_Container">
        <div>
          <div className="TopNews_Show1">
            <div>
              <img src={TopNewsImage} alt="" />
            </div>
            <div>
              <h3>Design Inspiration</h3>
              <h1>Bedroom Design is the Most Personal...</h1>
              <h2>
                Is it true that the bedroom design is the most personal
                reflection of the owner? Many people believe that to be able to
                judge a person's
              </h2>
            </div>
          </div>
          <div className="TopNews_Card_Owner">
            <img src={Articleframe} alt="" />
            <h1>
              By Jenny Agnes
              <span className="TopNews_Card_Date">Tuesday, 17 May 2022</span>
            </h1>
          </div>
        </div>
        <div>
          <div className="TopNews_Show2">
            <div>
              <img src={TopNewsImage} alt="" />
            </div>
            <div>
              <h3>Tips and Trick</h3>
              <h1>Create a non-monotonous and dynamic...</h1>
              <h2>
                Quoted from The Healthy Home Economist, a study in 1932 stated
                that color doesn't really have to be visible to have an effect
              </h2>
            </div>
          </div>
          <div className="TopNews_Card_Owner">
            <img src={Articleframe} alt="" />
            <h1>
              By Juliana Athorn
              <span className="TopNews_Card_Date">
                Wednesday, 22 January 2022
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
