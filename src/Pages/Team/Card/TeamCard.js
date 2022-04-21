import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import "./TeamCard.css";

export default function TeamCard(parse) {
    return (
        <div className="team-card">
            <div className="team-member-photo">
                <img src={parse.img} alt={parse.alt} />
                <div className="team-member-details">
                    {parse.name}
                    <div className="social">
                        <Link
                            to="//instagram.com/ieeejuit"
                            target={"_blank"}
                            className="instagram"
                        >
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
