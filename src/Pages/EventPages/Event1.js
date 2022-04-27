import "./EventPages.css";
import Navibar from "../Components/Navbar/Navbar";
import EventPageCard from "./EventPageCard/EventPageCard";
import React from "react";
import hackathon from "./Images/hackathon.jpeg";
import Footer1 from "../Components/Footer1/Footer1";

export default function Event1() {
  return (
    <div>
      <Navibar />
      <div className="events-section-page">
        <EventPageCard
          className="event-desc-card"
          img={hackathon}
          desc="Teams must be of 2-4 people or individual participation.
          All design elements, code, hardware builds, etc. for your project must be created during the
          event. While you may not begin coding in advance, you can plan and discuss it with your team in
          advance. Written documents and design sketches are allowed.
          Mid-evaluation can take place at any time during the hackathon which will be done by seniors.
          Each team will be given 4 minutes to present their idea/ppt and the working model in front of the
          judges during final evaluation.
          Any intellectual property developed during the hackathon will belong to the team that developed
          it."
          reglink=""
        />
      </div>
      <Footer1/>
    </div>
  );
}
