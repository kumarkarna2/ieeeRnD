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
                <div className="about-heading">ABOUT US</div>
                <div className="about-text">
                    IEEE-JUIT-SB is organising its flagship event R&D expo, a
                    3-day event including a plethora of events which empowers
                    students to apply their engineering skills to themes of high
                    relevance and global impact. The main attraction of this
                    event would be a 16 Hour Hackathon. To add a splash of
                    creativity ,we have some fun events too such as Squid Game,
                    De'roid Expo and the Virtual Cricket League. Our goal is to
                    bring all the students and attendees together to give them
                    inspiration, vision and motivation to achieve more and be
                    successful.
                </div>
            </div>
        </div>
    );
}
