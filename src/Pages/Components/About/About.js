import React from "react";
// import Link from "react-scroll/modules/components/Link";
// import Card from 'react-bootstrap/Card';
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="about-website" id="about">
      <div className="about-us-box">
        <div className="about-heading">About Us</div>
        <div className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
          tellus ex, vel egestas ipsum ornare ut. Cras ultrices sit amet lorem
          eget pretium. Donec egestas ac urna sed consequat. Pellentesque eget
          placerat mi. Etiam rhoncus nec ex at egestas. Vivamus laoreet massa
          sit amet dolor dictum, at scelerisque turpis interdum. Maecenas massa
          est, accumsan nec egestas eu, dapibus quis ligula. Nullam nisi urna,
          tincidunt ac nunc eget, volutpat commodo metus.
        </div>
      </div>
    </div>
  );
}
