import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
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
    return (
        <div>
            <nav id="menu">
                <input
                    type="checkbox"
                    id="responsive-menu"
                    onclick="updatemenu()"
                />
                <label />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
