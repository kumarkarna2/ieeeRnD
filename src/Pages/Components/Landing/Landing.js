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
      <CountdownTimer/>
    </div>
  );
}
