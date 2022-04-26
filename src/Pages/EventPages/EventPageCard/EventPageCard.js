import React from 'react'
import "./EventPageCard.css"
import { Link } from "react-router-dom";

export default function EventPageCard(parse) {
  return (
    <div className="whioleeventcard">
        <div className="event-photo">
            <img src={parse.img} className="event-image" ></img>
        </div>

        <div className="event-description">
            {parse.desc}
        </div>

        <div className="registration-button-page">
            <Link className="reg-link" to="/" >REGISTER</Link>
        </div>

    </div>
  )
}
