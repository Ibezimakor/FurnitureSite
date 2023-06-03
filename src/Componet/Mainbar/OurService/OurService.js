import React from "react";
import "./OurService.css";
import ServiceRating from "../ServiceRating/ServiceRating";

export default function OurService() {
  return (
    <div>
      <div>
        <div className="BenefitBox">
          <div className="Benefit">
            <h2>Benefit</h2>
            <h1>
              Benefits when using <br />
              our services
            </h1>
          </div>
          <div className="Benefit2">
            <h2>
              Pellentesque etiam blandit in tincidunt at donec. Eget <br />
              ipsum dignissim placerat nisi, adipiscing mauris non purus <br />
              parturient.
            </h2>
          </div>
        </div>
      </div>

      <ServiceRating />
    </div>
  );
}
