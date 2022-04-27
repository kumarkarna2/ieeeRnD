import React from 'react'
import "./EventPages.css"
import Navibar from "../Components/Navbar/Navbar";
import EventPageCard from "./EventPageCard/EventPageCard";
import bgmi from "./Images/bgmi.jpeg";
import Footer1 from '../Components/Footer1/Footer1';
export default function Event6() {
  return (
    <div>
        <Navibar />
      <div className="events-section-page">
        <EventPageCard
        className="event-desc-card"
          img={bgmi}
          desc="All matches will be played on the most recent BGMI Version, with thestandard rules on Custom Game.
          Matches will be played on Erangel and Miramar, on sunny weather.
          Teaming with opposing teams is forbidden.
          Teaming teams will be last on the rankings without the a need forproof.All team captains must take the end of the game screenshots
          Creating a Team
          Each team consists of 4 main and 1 substitute players. Having asubstitute player is not a must.
          Players must play on their specified accounts.
          Players cannot swap accounts among themselves."
          reglink=""
        />
      </div>
      <Footer1/>
    </div>
  )
}
