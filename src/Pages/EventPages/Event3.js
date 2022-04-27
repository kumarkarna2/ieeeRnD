import React from 'react'
import "./EventPages.css"
import Navibar from "../Components/Navbar/Navbar";
import EventPageCard from "./EventPageCard/EventPageCard";
import vcl from "./Images/vcl.jpeg";


export default function Event3() {
  return (
    <div>
        <Navibar />
      <div className="events-section-page">
        <EventPageCard
        className="event-desc-card"
          img={vcl}
          desc="Virtual Cricket League is a gamesimulation of the real - life
          Cricket Scenario , designed especially for the people to
          enjoy the best experience of this sport by participating in a
          heated auction. VCL provides a competitive experience and a platform to showcase your cricket knowledge by putting your best of the experience and vital learnings of this game.
          So, get ready with your poker faces and bag some of the most famous players of all time in the game, including Virat Kohli, MS Dhoni, Jaspreet Bumrah, Rohit Sharma, Hardik Pandya, and many more excellent 
          players in the auction. Form up your teams, strategies you play, and lineup to dominate and be the champion of this virtual game."
          reglink=""
        />
      </div>
    </div>
  )
}
