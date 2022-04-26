import React from "react";
import "./SponsorsCard.css"

export default function SponsorsCard(parse) {
  return (
    <div>
      <div className="sponsors-card">
        <div className="sponsors-image">
          <img src={parse.img} alt={parse.alt} />
        </div>
        {/* <div className="sponsor-name">
            {parse.spname}
        </div> */}
      </div>
    </div>
  );
}
