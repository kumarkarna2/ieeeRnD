import React from "react";
import "./SponsorsCard.css";

export default function SponsorsCard(parse) {
    return (
        <div>
            <div className="sponsors-card">
                <div className="sponsors-image">
                    <a href={parse.link} target="_blank" rel="noreferrer">
                        <img src={parse.img} alt={parse.alt} />
                    </a>
                </div>
                {/* <div className="sponsor-name">
            {parse.spname}
        </div> */}
            </div>
        </div>
    );
}
