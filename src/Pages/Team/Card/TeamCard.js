import React from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import "./TeamCard.css";

export default function TeamCard(parse) {
  return (
    <div className="team-card">
      <div className="team-member-photo">
        <img src={parse.img} alt={parse.alt} />
        <div className="team-member-details">
          {parse.name}
          <div className="team-member-socials">
            <Link to={parse.insta}><BsInstagram/></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
