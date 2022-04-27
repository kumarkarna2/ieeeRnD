import React from "react";
import "./EventPages.css";
import Navibar from "../Components/Navbar/Navbar";
import EventPageCard from "./EventPageCard/EventPageCard";

import squidgames from "./Images/squidgames.jpeg";
import Footer1 from "../Components/Footer1/Footer1";

export default function Event2() {
  return (
    <div>
      <Navibar />
      <div className="events-section-page">
        <EventPageCard
          className="event-desc-card"
          img={squidgames}
          desc="IEEE- SB looks to innovate, and we are masters at it. At Ascend,
          IEEE-SB, Jaypee University of Information Technology, we present
          before you Squid Game - A War of Survival.
          It is one of a kind event that has never happened before, which
          would test every person's skill required to survive.
          The competition involves five rounds, all eliminatory in nature. The
          participants would be required to play it just for themselves.
          Shortlisted participants from the first round would move to the next
          rounds."
          reglink=""
        />
      </div>
      <Footer1/>
    </div>
  );
}
