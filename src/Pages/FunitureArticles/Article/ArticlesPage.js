import React from "react";
import Navbar from "../../../Componet/Header/Navbar/Navbar";
import FooterBar from "../../../Componet/Footer/FooterBar";
import TopNews from "../Top News/TopNews";
import Trending from "../Trending/Trending";
import "./Articles.css";

import ArticleSlid1 from "../../../Asset/images/ArticleSlid1.png";
import Articleframe from "../../../Asset/images/Artcle frame 1.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export default function ArticlesPage() {
  return (
    <section>
      <Navbar />
      <div>
        <div className="Production_Article">
          <h1>Article</h1>
          <h3>
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item
          </h3>
        </div>
        <div className="ArticleList">
          <Carousel swipeable={true} draggable={true} responsive={responsive}>
            <div className="Article_Card">
              <div>
                <img src={ArticleSlid1} alt=" Frame Work " />
              </div>
            </div>
            <div className="Article_Card">
              <div>
                <img src={ArticleSlid1} alt=" Frame Work " />
              </div>
            </div>
            <div className="Article_Card">
              <div>
                <img src={ArticleSlid1} alt=" Frame Work " />
              </div>
            </div>
            <div className="Article_Card">
              <div>
                <img src={ArticleSlid1} alt=" Frame Work " />
              </div>
            </div>
            <div className="Article_Card">
              <div>
                <img src={ArticleSlid1} alt=" Frame Work " />
              </div>
            </div>
            <div className="Article_Card">
              <div>
                <img src={ArticleSlid1} alt=" Frame Work " />
              </div>
            </div>
          </Carousel>
        </div>
        <div className="Article_Card_Discription">
          <h3>Tips and Trick</h3>
          <h1>
            This 400-Square-Foot New York Apartment Is Maximized With Custom
            Millwork
          </h1>

          <div className="Article_Card_Owner">
            <img src={Articleframe} alt="" />
            <h1>
              By Morgan Goldberg
              <span className="Article_Card_Date">Tuesday, 17 May 2022</span>
            </h1>
          </div>
        </div>
        <TopNews />
        <Trending />
      </div>
      <FooterBar />
    </section>
  );
}
