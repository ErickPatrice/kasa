import React from "react";
import { NavLink } from "react-router-dom";
import logoNavbar from "../../assets/logo.svg";
import "./navbar.css"

function Navbar() {

    return (
        <div className="navbar">
            <div className="logo">
                <img className="logo-img" src= {logoNavbar} alt ="logo" /> 
            </div>
            <div className="nav-links">
                <NavLink
                    to="/"
                //     className={({ isActive, notActive }) =>
                //     "header_Nav_link" + (isActive ? " activated" : "")
                        
                // }
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    // className={({ isActive }) =>
                    // "header_Nav_link" + (isActive ? " activated" : "")
                    // }
                >
                    A propos
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar ;