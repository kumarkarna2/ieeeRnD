import React from "react";
import NaviBar from "../Components/Navbar/Navbar";
import SponsorsCard from "./Cards/SponsorsCard";
import "./Sponsors.css";
import ace from "./Images/ac.png";
import cl from "./Images/cl.png";
import cp from "./Images/cp.png";
import jb from "./Images/jb.png";
import ta from "./Images/ta.png";
import db from "./Images/db1.png";
import vh from "./Images/vh.png";
import sn from "./Images/sn.png";
import sy from "./Images/sy.png";
import cc from "./Images/cc.png";
import ls from "./Images/ls.png";
import ws from "./Images/ws.png";
import nb from "./Images/nb.png";
import ib from "./Images/ib.png";
import es from "./Images/es.png";
import Footer1 from "../Components/Footer1/Footer1";

export default function Sponsors() {
    return (
        <div>
            <NaviBar />
            <div className="sponsor-page">
                <div className="sponsors-heading">Event Partner</div>
                <div className="sponsors-section">
                    <SponsorsCard
                        link="//www.aceenggacademy.com/"
                        img={ace}
                        alt="Ace Engineering Academy"
                        spname="Ace Engineering Academy"
                    />
                    <SponsorsCard
                        link="//thecareerlabs.com/"
                        img={cl}
                        alt="Career Labs"
                        spname="Career Labs"
                    />
                    <SponsorsCard
                        link="//collegepond.com/"
                        img={cp}
                        alt="Collage Pond"
                        spname="Collage Pond"
                    />
                </div>
                <div className="sponsors-heading">Tech Partner</div>
                <div className="sponsors-section">
                    <SponsorsCard
                        link="//wharfstreetstrategies.com/"
                        img={ws}
                        alt="WSS"
                        spname="WSS"
                    />
                </div>
                <div className="sponsors-heading">Associate Partner</div>
                <div className="sponsors-section">
                    <SponsorsCard
                        link="//www.jetbrains.com/"
                        img={jb}
                        alt="Jet Brains"
                        spname="Jet Brains"
                    />
                    <SponsorsCard
                        link="//www.taskade.com/"
                        img={ta}
                        alt="Taskade"
                        spname="Taskade"
                    />
                </div>
                <div className="sponsors-heading">Hosting Partner</div>
                <div className="sponsors-section">
                    <SponsorsCard
                        link="//digitalwebdia.com/"
                        img={db}
                        alt="DigitalWebdia"
                        spname="DigitalWebdia"
                    />
                    <SponsorsCard
                        link="//vapourhost.com/"
                        img={vh}
                        alt="VapourHost"
                        spname="VapourHost"
                    />
                </div>
                <div className="sponsors-heading">Media Partner</div>
                <div className="sponsors-section">
                    <SponsorsCard
                        link="//www.startupnews.fyi/"
                        img={sn}
                        alt="startupnews"
                        spname="startupnews"
                    />
                    <SponsorsCard
                        link="//www.noticebard.com/"
                        img={nb}
                        alt="Notice Board"
                        spname="Notice Board"
                    />
                </div>
                <div className="sponsors-heading">Interview Partner</div>
                <div className="sponsors-section">
                    <SponsorsCard
                        link="//interviewbuddy.in/"
                        img={ib}
                        alt="Interview Buddy"
                        spname="Interview Buddy"
                    />
                </div>
                <div className="sponsors-heading">Education Partner</div>
                <div className="sponsors-section">
                    <SponsorsCard
                        link="//easyshiksha.com/"
                        img={es}
                        alt="Easy Shiksha"
                        spname="Easy Shiksha"
                    />
                </div>
                <div className="sponsors-heading">Streaming Partner</div>
                <div className="sponsors-section">
                    <SponsorsCard
                        link="//streamyard.com/"
                        img={sy}
                        alt="StreamYard"
                        spname="StreamYard"
                    />
                </div>
                <div className="sponsors-heading">
                    Eating & Beverage Partner
                </div>
                <div className="sponsors-section">
                    <SponsorsCard
                        link="/"
                        img={cc}
                        alt="Corner Cafe"
                        spname="Corner Cafe"
                    />
                    <SponsorsCard
                        link="/"
                        img={ls}
                        alt="Little Sicily"
                        spname="Little Sicily"
                    />
                </div>
            </div>
            <Footer1 />
        </div>
    );
}
