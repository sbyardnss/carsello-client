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
        },[location]
    )
    return (
        <header id="navMenu">
            {/* <section id="logoSection"> */}
            {/* </section> */}
            <div id={navigationId}>
                {/* <img id={logoId} src={carselloLogo} onClick={()=> navigate("")}/> */}
                <div id="nameLogoText" onClick={()=> navigate("")}>Lizzie Carsello</div>
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