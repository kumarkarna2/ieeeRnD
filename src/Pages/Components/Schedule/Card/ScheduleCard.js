import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./ScheduleCard.css";


export default function ScheduleCard(parse) {
  const [isOpen1, setIsOpen1] = useState(false);

  const onClickEvent1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const onClickEvent2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div>
      <div
        className={`schedule-wrapper-1 ${
          isOpen1 ? "schedule-wrapper-1-active" : ""
        } `}
      >
        <div className="schedule-heading">
          <div className="schedule-heading-titlebox">
            <div className="date-time">
              {parse.date} <br></br> {parse.month}
            </div>
            <div className="schedule-heading-m">{parse.day}</div>
            <div onClick={onClickEvent1} className="more-options-m">
              <div className="more-option-show">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <div className="more-option-hide"></div>
            </div>
          </div>

          <div className="list">
            <div className="list-item">
              {parse.event1}
            </div>

            <div className="line-schedule"/>

            <div className="list-item">
              {parse.event2}
            </div>
            <div className="line-schedule"/>

            <div className="list-item">
              {parse.event3}
            </div>
            {/* <hr></hr>

            <div className="list-item">
              {parse.event4}
            </div>

            <hr></hr>

            <div className="list-item">
              {parse.event5}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
