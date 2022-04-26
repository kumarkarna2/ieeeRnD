import React from "react";
import "./Events.css";
import EventsCard from "./Card/EventsCard";
import deroidexpo from "../../EventPages/Images/deroidexpo.jpeg"
import bgmi from "../../EventPages/Images/bgmi.jpeg"
import velocity from "../../EventPages/Images/velocity.jpeg"
import spinoweb from "../../EventPages/Images/spinoweb.jpeg"
import vcl from "../../EventPages/Images/vcl.jpeg"
import squidgames from "../../EventPages/Images/squidgames.jpeg"
import hackathon from "../../EventPages/Images/hackathon.jpeg"

export default function Events() {
    return (
        <div className="events-section" id="events">
            <div className="events-heading">EVENTS</div>
            <div className="events-cards-section">
                <EventsCard
                    img={hackathon}
                    title="Hackathon"
                    desc="A hackathon is a social coding event that
                    brings computer programmers and other
                    interested people together to improve upon
                    or build a new software program or project."
                    link="/event1"
                />
                <EventsCard
                    img={squidgames}
                    title="Squid Games"
                    desc="IEEE- SB looks to innovate, and we are masters at it. At Ascend,
                    IEEE-SB, Jaypee University of Information Technology, we present
                    before you Squid Game - A War of Survival.
                    It is one of a kind event that has never happened..."
                    link="/event2"
                />
                <EventsCard
                    img={vcl}
                    title="VCL"
                    desc="Virtual Cricket League is a gamesimulation of the real - life
                    Cricket Scenario , designed especially for the people to
                    enjoy the best experience of this sport by participating in a
                    heated auction."
                    link="/event3"
                />{" "}
                <EventsCard
                    img={spinoweb}
                    title="Spin-O-Web"
                    desc="Spin-o-web is a 1.5 hour long mindscaping
                    event that tests your designing and developing
                    skills, and embraces you to the world of web
                    development. Spin the fortune and showcase
                    what you’ve got. The event is full of twists and
                    tricks."
                    link="/event4"
                />{" "}
                <EventsCard
                    img={velocity}
                    title="Velocity"
                    desc=""
                    link="/event5"
                />{" "}
                <EventsCard
                    img={bgmi}
                    title="BGMI"
                    desc="All matches will be played on the most recent BGMI Version, with thestandard rules on Custom Game.
                    Matches will be played on Erangel and Miramar, on sunny weather.
                    Teaming with opposing teams is forbidden."
                    link="/event6"
                />
                <EventsCard
                img={deroidexpo}
                    title="De'roid Expo"
                    desc="A new era of industrial innovation is here. The Industries of the Future are all about people creating the products that shape our lives.
                    With the softwares and unique solutions that bring today's industries to life..."
                    link="/event7"
                />
            </div>
        </div>
    );
}
