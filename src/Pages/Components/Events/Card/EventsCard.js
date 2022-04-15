import React from "react";
import "./EventsCard.css";
import Coding from "../Images/Coding.png";
import { Link } from "react-router-dom";

export default function EventsCard(parse) {
  return (
    <div>
      <div className="events-container">
        <div className="box">
          <span className="s-cards"></span>
          <div className="content-event-card">
            <div className="card-image-events">
              <img src={Coding} alt="Coding"/>
            </div>
            <div className="card-content-events">
              <h2 className="event-card-title">{parse.title}</h2>
              <p className="event-card-desc">{parse.desc}</p>
              <Link className="event-card-link" to="#">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
