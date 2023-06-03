import React from "react";
import "./ProductList.css";
import Bookshelf from "../../../Asset/BookShelf.png";
import whiteChair from "../../../Asset/White Aesthetic Chair.png";
import Sofa from "../../../Asset/Sofa Emupuk Banget.png";
import bardono from "../../../Asset/Bardono smart Lamp.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};
export default function ProductList() {
  return (
    <div>
      <div className="ProductionList">
        <Carousel swipeable={true} draggable={true} responsive={responsive}>
          <div className="Product-Card">
            <div>
              <img src={Bookshelf} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Living Room</h2>
              <div>
                <h1>Wooden Bookshelf</h1>
                <h4>Combination of wood and wool</h4>
                <h3>$62.23</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={bardono} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Lamp</h2>
              <div>
                <h1>Bardono Smart Lamp</h1>
                <h4>Easy to use with bluetooth connection</h4>
                <h3>$62.23</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={whiteChair} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Chair</h2>
              <div>
                <h1>White Aesthetic Chair</h1>
                <h4>Combination of wood and wool</h4>
                <h3>$63.47</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={Sofa} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Sofa</h2>
              <div>
                <h1>Sofa Empuk Banget</h1>
                <h4>Using kapuk randu material</h4>
                <h3>$58.39</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={Bookshelf} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Living Room</h2>
              <div>
                <h1>Wooden Bookshelf</h1>
                <h4>Combination of wood and wool</h4>
                <h3>$62.23</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={bardono} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Lamp</h2>
              <div>
                <h1>Bardono Smart Lamp</h1>
                <h4>Easy to use with bluetooth connection</h4>
                <h3>$62.23</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={whiteChair} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Chair</h2>
              <div>
                <h1>White Aesthetic Chair</h1>
                <h4>Combination of wood and wool</h4>
                <h3>$63.47</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={Sofa} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Sofa</h2>
              <div>
                <h1>Sofa Empuk Banget</h1>
                <h4>Using kapuk randu material</h4>
                <h3>$58.39</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={Bookshelf} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Living Room</h2>
              <div>
                <h1>Wooden Bookshelf</h1>
                <h4>Combination of wood and wool</h4>
                <h3>$62.23</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={bardono} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Lamp</h2>
              <div>
                <h1>Bardono Smart Lamp</h1>
                <h4>Easy to use with bluetooth connection</h4>
                <h3>$62.23</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={whiteChair} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Chair</h2>
              <div>
                <h1>White Aesthetic Chair</h1>
                <h4>Combination of wood and wool</h4>
                <h3>$63.47</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={Sofa} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Sofa</h2>
              <div>
                <h1>Sofa Empuk Banget</h1>
                <h4>Using kapuk randu material</h4>
                <h3>$58.39</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={Bookshelf} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Living Room</h2>
              <div>
                <h1>Wooden Bookshelf</h1>
                <h4>Combination of wood and wool</h4>
                <h3>$62.23</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={bardono} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Lamp</h2>
              <div>
                <h1>Bardono Smart Lamp</h1>
                <h4>Easy to use with bluetooth connection</h4>
                <h3>$62.23</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={whiteChair} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Chair</h2>
              <div>
                <h1>White Aesthetic Chair</h1>
                <h4>Combination of wood and wool</h4>
                <h3>$63.47</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={Sofa} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Sofa</h2>
              <div>
                <h1>Sofa Empuk Banget</h1>
                <h4>Using kapuk randu material</h4>
                <h3>$58.39</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={Bookshelf} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Living Room</h2>
              <div>
                <h1>Wooden Bookshelf</h1>
                <h4>Combination of wood and wool</h4>
                <h3>$62.23</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={bardono} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Lamp</h2>
              <div>
                <h1>Bardono Smart Lamp</h1>
                <h4>Easy to use with bluetooth connection</h4>
                <h3>$62.23</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={whiteChair} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Chair</h2>
              <div>
                <h1>White Aesthetic Chair</h1>
                <h4>Combination of wood and wool</h4>
                <h3>$63.47</h3>
              </div>
            </div>
          </div>
          <div className="Product-Card">
            <div>
              <img src={Sofa} alt=" Bookshelf Funiture " />
            </div>
            <div className="Product-Card-Description">
              <h2>Sofa</h2>
              <div>
                <h1>Sofa Empuk Banget</h1>
                <h4>Using kapuk randu material</h4>
                <h3>$58.39</h3>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
