import React from 'react'
import "./EventPages.css"
import Navibar from "../Components/Navbar/Navbar";
import EventPageCard from "./EventPageCard/EventPageCard";
import velocity from "./Images/velocity.jpeg";
import Footer1 from '../Components/Footer1/Footer1';

export default function Event5() {
  return (
    <div>
        <Navibar />
      <div className="events-section-page">
        <EventPageCard
        className="event-desc-card"
          img={velocity}
          desc="Velocity will be a team event, the team must consist of two members. It will be divided in 2 rounds
          The first round will consist of Bug fixing and Blind Coding.
          The teammates will have to decide amongst themselves that which of the teammates will go for which domain. 
          Then the teammates will be sent to two different rooms to solve the given problems.
          When they will solve the above mentioned rounds then they will gather in a common place and solve the Final coding round.
          It is all dependent on time so the faster you solve, the closer you are to winning !"
          reglink=""
        />
      </div>
      <Footer1/>
    </div>
  )
}
