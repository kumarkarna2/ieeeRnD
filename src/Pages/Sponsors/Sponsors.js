import React from "react";
import NaviBar from "../Components/Navbar/Navbar";
import SponsorsCard from "./Cards/SponsorsCard";
import "./Sponsors.css";
import Bonn from "./Images/Bonn.png";
import HPT from "./Images/HPT.jpg";
import Hundai from "./Images/Hundai.png";
import JIO from "./Images/JIO.jpg";
import Nescafe from "./Images/Nescafe.jpg";
import TSS from "./Images/TSS.png";
import Footer1 from "../Components/Footer1/Footer1";

export default function Sponsors() {
    return (
        <div>
            <NaviBar />
            <div className="sponsor-page">
                <div className="sponsors-heading">SPONSORS</div>
                <div className="sponsors-section">
                    <SponsorsCard img={Bonn} alt="Bonn" spname="Bonn" />
                    <SponsorsCard img={HPT} alt="HPT" spname="Tourism" />
                    <SponsorsCard img={Hundai} alt="Hundai" spname="Hyundai" />
                    <SponsorsCard img={JIO} alt="JIO" spname="JIO" />
                    <SponsorsCard
                        img={Nescafe}
                        alt="Nescafe"
                        spname="Nescafe"
                    />
                    <SponsorsCard
                        img={TSS}
                        alt="TSS"
                        spname="The Souled Store"
                    />
                </div>
            </div>
            <Footer1 />
        </div>
    );
}
