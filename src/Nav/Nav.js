import "./Nav.css"

import { Link, Navigate, useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react"
import "./Nav.css"

export const Nav = () => {
    const navigate = useNavigate()
    return (
        <header className="navigation" id="navMenu">
            <div id="logo">
                <Link className="logo__icon" to="/">
                    <h1 id="/" className="navigation__name">Home</h1>
                </Link>
            </div>
            <div id="navigation">
                <Link id="carselloLogo" to="/">logo</Link>
                <ul id="carselloNavigation">
                    <li><Link className="navLink" to="/about">About Me</Link></li>
                    <li><Link className="navLink" to="/art">Art</Link></li>
                    <li><Link className="navLink" to="/events">Events</Link></li>
                    <li><Link className="navLink" to="/otherServices">Other Services</Link></li>
                    <li><Link className="navLink" to="/admin">admin</Link></li>
                </ul>
            </div>
        </header>
    )
}