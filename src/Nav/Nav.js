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
                    <li><Link className="navLink" to="/art">art</Link></li>
                    <li><Link className="navLink" to="/events">events</Link></li>
                    <li><Link className="navLink" to="/otherServices">other services</Link></li>
                    <li><Link className="navLink" to="/admin">admin</Link></li>
                </ul>
            </div>
        </header>
    )
}