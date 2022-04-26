import React from 'react'
import "./EventPages.css"
import Navibar from "../Components/Navbar/Navbar";
import EventPageCard from "./EventPageCard/EventPageCard";
import velocity from "./Images/velocity.jpeg";

export default function Event5() {
  return (
    <div>
        <Navibar />
      <div className="events-section-page">
        <EventPageCard
        className="event-desc-card"
          img={velocity}
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
          reglink=""
        />
      </div>
    </div>
  )
}
