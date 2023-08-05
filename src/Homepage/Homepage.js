import { getArt, getEvents } from "../ServerManager"
import { useContext, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "../Homepage/Homepage.css"
import curationImage from "../Images/curationSectionImage.JPEG"
import artImage from "../Images/artSectionImage.JPG"
import muralingImage from "../Images/signageSectionImage.JPEG"
import writingImage from "../Images/writingSectionImage.JPG"
import brokenKey from "../Images/brokenKey.jpg"
// import carselloLogo from "../Images/lizzieLogo.jpg"
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
            {/* <section id="logoSection">
                <img id="carselloLogo" src={carselloLogo} />
            </section> */}
            {/* <section id="homepageBackground">
                <img id="brokenKeyBack" src={brokenKey} />
            </section> */}
            <article id="offeredServices">
                <section id="selfDescription">
                    {/* <p>nostalgia <br />familiarity<br />accessability <br /></p> */}
                    {/* <p>
                        My pieces utilize varieties of shape and color to achieve balance and evoke emotional responses from the viewer. I derive shape inspirations from natural elements and exaggerate them into a more abstract form, creating nostalgic and familiar images.
                    </p> */}
                </section>
                
                <section className="serviceSectionRight">
                    <img className="servicesImage" src={artImage} onClick={() => navigate('/art')} />
                    <div className="rotateLeftLabel">art</div>
                </section>
                <section className="serviceSectionLeft">
                    <img className="servicesImage" src={curationImage} onClick={() => navigate('/curation')} />
                    <div className="rotateRightLabel">curation</div>
                </section>
                <section className="serviceSectionRight">
                    <img className="servicesImage" src={muralingImage} onClick={() => navigate('/muraling')} />
                    <div className="rotateLeftLabel">design</div>
                </section>
                <section className="serviceSectionLeft">
                    <img className="servicesImage" src={writingImage} onClick={() => navigate('/curation')} />
                    <div className="rotateRightLabel">writing</div>
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