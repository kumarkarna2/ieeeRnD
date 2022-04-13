import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CM from "./Images/CM.svg";
import "./Navbar.css";
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import {Link as LNK} from 'react-scroll';
import {useState} from 'react';

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
const [isOpen, setOpen] = useState(false)

const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
return (
  <nav className='navbar'>
    <div className={header ? "header active" : "header"}>
      <div className={`header-wrapper ${click ? 'header-wrapper active':''} `}>
        <div className='nav-container'>
          <div className='murious-logo-header'>
            <Link 
              onClick={() => scroll.scrollToTop()} 
              className='nav-links' 
              activeClassName='active' 
              to='/'>
                <img src={CM} className='nav-logo' alt='Murious'/>
            </Link>
          </div>
          <div className='header-links'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      
              <li className='nav-item'>
                <LNK 
                  to='about-murious' 
                  className='nav-links' 
                  activeClassName='active' 
                  onClick={handleClick}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}>
                    About
                </LNK>
              </li>
              <li className='nav-item'>
                <LNK 
                  to='event-schedule-murious' 
                  className='nav-links' 
                  activeClassName='active' 
                  onClick={handleClick}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}>
                    Schedule
                </LNK>  
              </li>
              <li className='nav-item'>
                <LNK 
                  to='events-murious' 
                  className='nav-links' 
                  activeClassName='active' 
                  onClick={handleClick}
                  spy={true}
                  smooth={true}
                  offset={80}
                  duration={1000}>
                    Events
                </LNK>
              </li>
              <li className='nav-item'>
                <LNK 
                  to='sponsors-murious' 
                  className='nav-links' 
                  activeClassName='active' 
                  onClick={handleClick}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}>
                    Sponsors
                </LNK>
              </li>
              <li className='nav-item'>
                <LNK 
                  to='team-murious' 
                  className='nav-links' 
                  activeClassName='active' 
                  onClick={handleClick}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}>
                    Team
                </LNK>
              </li>
              <li className='nav-item contact'>
                <LNK 
                  to='contact-form-murious' 
                  className='nav-links' 
                  activeClassName='active' 
                  onClick={handleClick}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}>
                    Contact
                </LNK>
              </li>
              <li className='nav-item contact'>
                <LNK 
                  to='/' 
                  className='contact-button' 
                  activeClassName='active' 
                  onClick={handleClick}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}>
                    Registration
                </LNK>
              </li>
            </ul>
            <div className='nav-icon' onClick={handleClick}>
              {click ? <RiCloseLine/> : <RiMenu3Line/>} 
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
}
