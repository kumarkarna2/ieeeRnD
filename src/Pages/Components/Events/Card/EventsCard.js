import React from "react";
import "./EventsCard.css";
import { Link } from "react-router-dom";

export default function EventsCard(parse) {
  return (
    <div>
      <div className="events-container">
        <div className="box">
          <span className="s-cards"></span>
          <div className="content">
            <h2 className="event-card-title">{parse.title}</h2>
            <p className="event-card-desc">{parse.desc}</p>
            <Link className="event-card-link" to="#">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
