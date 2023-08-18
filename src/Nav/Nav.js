import "./Nav.css"

import { Link, Navigate, useNavigate, useLocation } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react"
import "./Nav.css"
import carselloLogo from "../Images/LizzieLogo.png"
export const Nav = () => {
    const [logoId, setLogoId] = useState("carselloLogo")
    const [navigationId, setNavigationId] = useState("navigation")
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(
        () => {
            if (location.pathname !== "/") {
                setLogoId("carselloLogoMini")
                setNavigationId("navigationMini")
            }
            else {
                setLogoId("carselloLogo")
                setNavigationId("navigation")
            }
        }, [location]
    )
    return (
        <header id="navMenu">

            <div id={navigationId}>
                <img id={logoId} src={carselloLogo} onClick={() => navigate("")} />
                
                <ul id="carselloNavigation">
                    <li><Link className="navLink" to="/art">art</Link></li>
                    <li><Link className="navLink" to="/events">events</Link></li>
                    <li><Link className="navLink" to="/curation">curation</Link></li>
                    <li><Link className="navLink" to="/design">design</Link></li>
                    <li><Link className="navLink" to="/writing">writing</Link></li>
                </ul>
            </div>
        </header>
    )
}