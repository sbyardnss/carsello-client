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
    const nav = useRef()
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

    const check = (e) => {
        if (e.target.checked === true) {
            document.body.style.overflow = 'hidden'
            return false
        }
        else {
            document.body.style.overflow = 'auto'
            return true
        }
    }
    const closeMenuOnNavigate = () => {
        document.getElementById("active").checked = false
    }
    const setNoScroll = (e) => {
        document.body.style.overflow = 'hidden'
    }
    return (
        <header id="navMenu">
            <div id={navigationId}>
                <img id={logoId} src={carselloLogo} onClick={() => navigate("")} />
                {/* <div>Lizzie Carsello</div> */}
                <input type="checkbox" id="active" onChange={(e) => {
                    check(e)
                }} />
                <label htmlFor="active" className="menu-btn"><span></span></label>
                <label htmlFor="inactive" className="close"></label>
                <ul id="carselloNavigation">
                    <li><Link className="navLink" onClick={() => closeMenuOnNavigate()} to="/art">art</Link></li>
                    <li><Link className="navLink" onClick={() => closeMenuOnNavigate()} to="/events">events</Link></li>
                    <li><Link className="navLink" onClick={() => closeMenuOnNavigate()} to="/curation">curation</Link></li>
                    <li><Link className="navLink" onClick={() => closeMenuOnNavigate()} to="/design">design</Link></li>
                    <li><Link className="navLink" onClick={() => closeMenuOnNavigate()} to="/writing">writing</Link></li>
                </ul>
            </div>
        </header>
    )
}