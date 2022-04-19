import React from "react";
import { Link } from "react-router-dom";
import TeamCard from "./Card/TeamCard";
import "./Team.css";
import Mayank from "./Images/Mayank.jpeg";
import NaviBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function Team() {
    return (
        <div>
            <NaviBar />
            <div className="team-page">
                <div className="team-section">
                    <div className="web-team">Web Team</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={Mayank}
                            alt="Mayank"
                            name="Mayank Kumar"
                            insta="//www.instagram.com/racinmk/"
                        />
                        <TeamCard
                            img={Mayank}
                            alt="Mayank"
                            name="Mayank Kumar"
                            insta="//www.instagram.com/racinmk/"
                        />
                        <TeamCard
                            img={Mayank}
                            alt="Mayank"
                            name="Mayank Kumar"
                            insta="//www.instagram.com/racinmk/"
                        />
                    </div>
                    <div className="web-team">Design Team</div>
                    <div className="team-card-section">
                        <TeamCard
                            img={Mayank}
                            alt="Mayank"
                            name="Mayank Kumar"
                            insta="//www.instagram.com/racinmk/"
                        />
                        <TeamCard
                            img={Mayank}
                            alt="Mayank"
                            name="Mayank Kumar"
                            insta="//www.instagram.com/racinmk/"
                        />
                        <TeamCard
                            img={Mayank}
                            alt="Mayank"
                            name="Mayank Kumar"
                            insta="//www.instagram.com/racinmk/"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
