import React from "react";
import ScheduleCard from "./Card/ScheduleCard";
import "./Schedule.css";

export default function Schedule() {
    return (
        <div className="schedule-section" id="schedule">
            <div className="schedule-section-heading">SCHEDULE</div>
            <div className="schedule-cards-section">
                <ScheduleCard
                    date="29"
                    month="April"
                    day="Day-1"
                    event1="5:30PM - Inaguration Ceremony"
                    event2="6:00PM - Hackathon Starts"
                    event3="8:00PM - 9:00PM - De'roid Expo"
                />
                <ScheduleCard
                    date="30"
                    month="April"
                    day="Day-2"
                    event1="12:00PM - Hackathon Ends"
                    event2="2:00PM - 8:00PM - VCL"
                    event3="8:00PM - 9:00PM - De'roid Expo"
                    event4="9:30PM - 12:00AM - BGMI"
                />
                <ScheduleCard
                    date="1"
                    month="May"
                    day="Day-3"
                    event1="10:00AM - 12:30PM - Spin-O-Web"
                    event2="1:00PM - 3:00PM - Velocity"
                    event3="4:00PM - 7:00PM - Squid Game"
                />
            </div>
        </div>
    );
}
