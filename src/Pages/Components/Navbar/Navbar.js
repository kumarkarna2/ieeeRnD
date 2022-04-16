import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import IEEE from "./Images/IEEE-JUIT(white).png";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Link as LNK } from "react-scroll";
import { useState } from "react";

export default function NaviBar() {
    const [header, setHeader] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    window.addEventListener("scroll", changeBackground);
    const [isOpen, setOpen] = useState(false);

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <nav className="navibar">
            <div className={header ? "header active" : "header"}>
                <div
                    className={`header-wrapper ${
                        click ? "header-wrapper active" : ""
                    } `}
                >
                    <div className="nav-container">
                        <div className="logo-header">
                            <Link
                                onClick={() => scroll.scrollToTop()}
                                className="nav-links"
                                activeClassName="active"
                                to="/"
                            >
                                <img
                                    src={IEEE}
                                    className="nav-logo"
                                    alt="IEEE"
                                />
                            </Link>
                        </div>
                        <div className="header-links">
                            <ul
                                className={
                                    click ? "nav-menu active" : "nav-menu"
                                }
                            >
                                <li className="nav-item">
                                    <LNK
                                        to="about-website"
                                        className="nav-links"
                                        activeClassName="active"
                                        onClick={handleClick}
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={100}
                                    >
                                        About
                                    </LNK>
                                </li>
                                <li className="nav-item">
                                    <LNK
                                        to="schedule-section-heading"
                                        className="nav-links"
                                        activeClassName="active"
                                        onClick={handleClick}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={100}
                                    >
                                        Schedule
                                    </LNK>
                                </li>
                                <li className="nav-item">
                                    <LNK
                                        to="events-section"
                                        className="nav-links"
                                        activeClassName="active"
                                        onClick={handleClick}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={100}
                                    >
                                        Events
                                    </LNK>
                                </li>
                                <li className="nav-item">
                                    <LNK
                                        to="sponsors-IEEE"
                                        className="nav-links"
                                        activeClassName="active"
                                        onClick={handleClick}
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={100}
                                    >
                                        Sponsors
                                    </LNK>
                                </li>
                                <li className="nav-item">
                                    <LNK
                                        to="team-IEEE"
                                        className="nav-links"
                                        activeClassName="active"
                                        onClick={handleClick}
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={100}
                                    >
                                        Team
                                    </LNK>
                                </li>
                                <li className="nav-item">
                                    <LNK
                                        to="contact-us"
                                        className="contact-button"
                                        activeClassName="active"
                                        onClick={handleClick}
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={100}
                                    >
                                        Contact US
                                    </LNK>
                                </li>
                            </ul>
                            <div className="nav-icon" onClick={handleClick}>
                                {click ? <RiCloseLine /> : <RiMenu3Line />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
