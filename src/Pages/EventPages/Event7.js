import React from 'react'
import "./EventPages.css";
import Navibar from "../Components/Navbar/Navbar";
import EventPageCard from "./EventPageCard/EventPageCard";
import deroidexpo from "./Images/deroidexpo.jpeg";
import Footer1 from '../Components/Footer1/Footer1';


export default function Event7() {
  return (
    <div>
        <Navibar />
      <div className="events-section-page">
        <EventPageCard
          className="event-desc-card"
          img={deroidexpo}
          desc="A new era of industrial innovation is here. The Industries of the Future are all about people creating the products that shape our lives.
            With the softwares and unique solutions that bring today's industries to life with advanced automation that has helped the mankind by catering effective innovations. Now almost everything is possible with just a tough of a button. Robots has altogether brought about a paradigm shift.
            Presenting to you the IoT exhibition by IEEE where you would witness some amazing maneuvering robots especially designed to help the mankind and cater with vital analytical informations"
          reglink=""
        />
      </div>
      <Footer1/>
    </div>
  )
}
