import { getArt, getEvents } from "../ServerManager"
import { useContext, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "../Homepage/Homepage.css"
import curationImage from "../Images/IMG_7556.jpg"
import artImage from "../Images/artSectionImage.jpeg"
import muralingImage from "../Images/muralingSectionImage.jpeg"
export const Homepage = () => {
    const navigate = useNavigate()
    const [events, setEvents] = useState([])
    useEffect(
        () => {
            getEvents()
                .then(data => setEvents(data))
        }, []
    )
    return <>
        <main id="homepageContainer">
            <section id="logoSection">
                <h1>logo</h1>
            </section>
            <article id="offeredServices">
                <section className="serviceSectionRight">
                    <h2 className="rotateLeftLabel">art</h2>
                    <img className="servicesImage" src={artImage} />
                </section>
                <section className="serviceSectionLeft">
                    <img className="servicesImage" src={curationImage} />
                    <h2 className="rotateRightLabel">curation</h2>
                </section>
                <section className="serviceSectionRight">
                    <h2 className="rotateLeftLabel">display</h2>
                    <img className="servicesImage" src={muralingImage} />
                </section>
                <section className="serviceSectionLeft">

                </section>
            </article>
            {/* old homepage */}
            {/* <section id="servicesOfferedList">
                <h2>need copy here for intro to offerings</h2>
                <div id="commissionDiv" className="offeredServiceLi">
                    <h3>Art Commission</h3>
                    <p>description</p>
                </div>
                <div id="curationDiv" className="offeredServiceLi">
                    <h3>Art Curation</h3>
                    <p>description</p>
                </div>
                <div id="writingDiv" className="offeredServiceLi">
                    <h3>Writing services</h3>
                    <p>description</p>
                </div>
                <div id="muralingDiv" className="offeredServiceLi">
                    <h3>Muraling, sign painting</h3>
                    <p>description</p>
                </div>
            </section>
            <section id="homepageEventsList">
                <h3>upcoming events</h3>
                {
                    events.map(e => {
                        const date = new Date(e.date_time).toDateString()
                        const time = new Date(e.date_time).toLocaleTimeString('en-us', { hour: "numeric", minute: "numeric" })
                        return (
                            <div key={e.id} className="homeEventListItem">
                                <div className="eventLITitle">{e.title}</div>
                                <div className="eventLILogistics">{e.location}</div>
                                <div className="eventLILogistics">{date}</div>
                                <div className="eventLILogistics">{time}</div>
                            </div>
                        )
                    })
                }
            </section> */}
        </main>
    </>
}