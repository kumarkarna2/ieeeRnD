import React from "react";
import "./Landing.css";
import Logo from "./Images/R&D Logo White 3d.png";
import CountdownTimer from "./CountdownTimer/CountdownTimer";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="logo-ieee">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="c-timer">
        <CountdownTimer 
          countdownTimestampMs={1651190400000}
        />
      </div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
