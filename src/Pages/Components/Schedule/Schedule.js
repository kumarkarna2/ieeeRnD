import React from "react";
import ScheduleCard from "./Card/ScheduleCard";
import "./Schedule.css";

export default function Schedule() {
  return (
    <div className="schedule-section" id="schedule">
      <div className="schedule-section-heading">Schedule</div>
      <div className="schedule-cards-section">
          <ScheduleCard
            date="25"
            month="March"
            day="Day-1"
            event1="9:00AM - 10:00AM - Inaguration Ceremony"
            event2="9:00AM - 10:00AM - Inaguration Ceremony"
            event3="9:00AM - 10:00AM - Inaguration Ceremony"
          />
          <ScheduleCard
            date="27"
            month="April"
            day="Day-2"
            event1="9:00AM - 10:00AM - Inaguration Ceremony"
            event2="9:00AM - 10:00AM - Inaguration Ceremony"
            event3="9:00AM - 10:00AM - Inaguration Ceremony"
          />
          <ScheduleCard
            date="27"
            month="April"
            day="Day-3"
            event1="9:00AM - 10:00AM - Inaguration Ceremony"
            event2="9:00AM - 10:00AM - Inaguration Ceremony"
            event3="9:00AM - 10:00AM - Inaguration Ceremony"
          />
      </div>
    </div>
  );
}
