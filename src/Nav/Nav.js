import "./Nav.css"

import { Link, Navigate, useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react"
import "./Nav.css"
import carselloLogo from "../Images/lizzieLogo.jpg"
export const Nav = () => {
    const navigate = useNavigate()
    return (
        <header id="navMenu">
            {/* <section id="logoSection"> */}
            {/* </section> */}
            <div id="navigation">
                <img id="carselloLogo" src={carselloLogo} onClick={()=> navigate("")}/>
                {/* <Link id="carselloLogo" to="/">logo</Link> */}
                <ul id="carselloNavigation">
                    <li><Link className="navLink" to="/art">Art</Link></li>
                    <li><Link className="navLink" to="/events">Events</Link></li>
                    <li><Link className="navLink" to="/otherServices">Other Services</Link></li>
                    <li><Link className="navLink" to="/admin">admin</Link></li>
                </ul>
            </div>
        </header>
    )
}