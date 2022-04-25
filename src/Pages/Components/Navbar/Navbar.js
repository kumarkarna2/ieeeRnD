import React, {useState} from 'react';
import "./Navbar.css";
import IEEE from "./Images/IEEE-JUIT(white).png";
import { Link } from "react-router-dom";
import {animateScroll as scroll} from 'react-scroll';


import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export default function Navibar() {
  function updatemenu() {
    if (document.getElementById("responsive-menu").checked == true) {
      document.getElementById("menu").style.borderBottomRightRadius = "0";
      document.getElementById("menu").style.borderBottomLeftRadius = "0";
    } else {
      document.getElementById("menu").style.borderRadius = "0px";
    }
  }
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [isOpen, setOpen] = useState(false)

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className={header?"header active":"header"}>
      <nav id="menu">
        <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />
        <label />
        {/* <ul className='rnd-logo'>
          <li> */}
            <Link
              onClick={() => scroll.scrollToTop()} 
              className='nav-links' 
              id="rnd-logo-scroll"
              activeClassName='active' 
              to='/'
            >
              <img src={IEEE} alt="IEEE" id="nav-logo" />
            </Link>
          {/* </li>
        </ul> */}
        <ul id="link">
          <li className='nav-links'>
            <Link
              to='about'
              className="font-links"
              activeClassName="active"
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-60}
              duration={100}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-links"
              activeClassName="active"
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              to="events-section"
              className="font-links"
              activeClassName="active"
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/sponsors"
              className="font-links"
              activeClassName="active"
              onClick={handleClick}
              // onClick={() => scroll.scrollToTop()}
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className="font-links"
              activeClassName="active"
              onClick={handleClick}
              // onClick={() => scroll.scrollToTop()}
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-links"
              activeClassName="active"
              // onClick={() => scroll.scrollToTop()}
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              Contact US
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
