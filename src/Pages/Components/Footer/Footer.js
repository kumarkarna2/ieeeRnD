import React from "react";
import "./Footer.css";
import logo from "./R&D Logo Black.png";
import ieee from "./IEEE-blue.png";
import sight from "./sight.png";
import wie_Logo from "./wiecolored.png";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
    return (
        <>
            <div className="Footer-section">
                <div className="Footer-Content">
                    <div className="Footer-Text">
                        <div className="Footer-Details">
                            <h1 className="Contact-Us">Contact Us</h1>
                            <div className="Footer-Line_l1"></div>
                            <div className="Footer-Details footertext">
                                Jaypee University Of Information Technology
                                <br />
                                Waknaghat, HP - 173234
                                <br />
                                India
                                <br />
                                <strong>
                                    Phone: +91-7082787975
                                    <br />
                                    Email: ieee.juits@juitsolan.in
                                </strong>
                                <br />
                            </div>

                            <div className="Footer-Socials">
                                <Link
                                    to="//instagram.com/ieeejuit"
                                    target={"_blank"}
                                    className="insta"
                                >
                                    <FaInstagram />
                                </Link>
                                <Link
                                    to="//instagram.com/jyc.technical.club?utm_medium=copy_link"
                                    target={"_blank"}
                                    className="you"
                                >
                                    <FaYoutube />
                                </Link>
                                <Link
                                    to="//instagram.com/jyc.technical.club?utm_medium=copy_link"
                                    target={"_blank"}
                                    className="in"
                                >
                                    <FaLinkedin />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="Footer-Logo">
                        <div className="Footer-Logo_RD">
                            <img
                                className="RD-Logo"
                                alt="R&D logo"
                                src={logo}
                            />
                        </div>
                        <div className="Footer-Logo_ieee">
                            <img
                                className="IEEE-Logo"
                                alt="IEEE logo"
                                src={ieee}
                            />
                        </div>
                        <div className="Footer-Logo_sight">
                            <img
                                className="sight-Logo"
                                alt="Sight logo"
                                src={sight}
                            />
                        </div>
                        <div className="Footer-Logo_wie">
                            <img
                                className="WIE_logo"
                                alt="WIE logo"
                                src={wie_Logo}
                            />

                            <p className="TMP-Text"></p>
                        </div>
                    </div>
                </div>

                <div className="Footer-Copyright">
                    Copyright © IEEE JUIT 2022.
                    <br /> All Rights Reserved.
                </div>
            </div>
        </>
    );
}

export default Footer;
