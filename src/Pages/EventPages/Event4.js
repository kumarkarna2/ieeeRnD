import React from "react";
import "./EventPages.css";
import Navibar from "../Components/Navbar/Navbar";
import EventPageCard from "./EventPageCard/EventPageCard";
import spinoweb from "./Images/spinoweb.jpeg";
import Footer1 from "../Components/Footer1/Footer1";

export default function Event4() {
  return (
    <div>
      <Navibar />
      <div className="events-section-page">
        <EventPageCard
          className="event-desc-card"
          img={spinoweb}
          desc="Spin-o-web is divided into two rounds wherein each
          round has their own set of points.
               
The first round includes clearing up a very messy
web page and beautifying it as per
their designing knowledge.
Participants can use HTML/CSS or any other frontend
language(s).

“Spin the Wheel” round, a round of luck, the test of
skills and your coordination will be the key to
success wherein you’ll be spinning a wheel
consisting of some diverse website themes you
have to design a webpage based on that."
          reglink=""
        />
      </div>
      <Footer1/>
    </div>
  );
}
