import React from "react";
import "./Landing.css";
import Logo from "./Images/logo.png";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="logo-ieee">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}
