import React from "react";
import "./EventsCard.css";

export default function EventsCard() {
  return (
    <div>
      <div className="events-container">
        <div className="box">
          <span className="s-cards"></span>
          <div className="content">
            <h2>Card one</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="box">
          <span className="s-cards"></span>
          <div class="content">
            <h2>Card two</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="box">
          <span></span>
          <div class="content">
            <h2>Card Three</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
