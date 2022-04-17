import React from "react";
import "./Events.css";
import EventsCard from "./Card/EventsCard";

export default function Events() {
    return (
        <div className="events-section" id="events">
            <div className="events-heading">evENts</div>
            <div className="events-cards-section">
                <EventsCard
                    title="Event-1"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <EventsCard
                    title="Event-1"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <EventsCard
                    title="Event-1"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </div>
    );
}
