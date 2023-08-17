import { getArt, getEvents } from "../ServerManager"
import { useContext, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "../Homepage/Homepage.css"
import curationImage from "../Images/curationSectionImage.JPEG"
import artImage from "../Images/artSectionImage.JPG"
import muralingImage from "../Images/signageSectionImage.JPEG"
import writingImage from "../Images/writingSectionImage.JPG"
import sparkles from "../Images/sparkles.png"
import mobileBackground from "../Images/mobileOpaque.png"
import fullBackground from "../Images/fullOpaque.png"
import backgroundOver from "../Images/carselloBackgroundOverlap.png"
import backgroundUnder from "../Images/carselloBackgroundUnder.png"
// import backgroundDesign from "../Images/carselloBackgroundFull.png"
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
            {/* <img id="backgroundDesignUnder" src={backgroundUnder} />
            <img id="backgroundDesignOver" src={backgroundOver} /> */}
            {/* <section id="logoSection">
                <img id="carselloLogo" src={carselloLogo} />
            </section> */}
            {/* <section id="homepageBackground">
                <img id="brokenKeyBack" src={brokenKey} />
            </section> */}
            {/* <div id="backgroundContainer">
                <img id="fullBackground" src={fullBackground} />
                <img id="mobileBackground" src={mobileBackground} />
            </div> */}
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
                    <img className="servicesImage" src={muralingImage} onClick={() => navigate('/design')} />
                    <div className="rotateLeftLabel">design</div>
                </section>
                <section className="serviceSectionLeft">
                    <img className="servicesImage" src={writingImage} onClick={() => navigate('/writing')} />
                    <div className="rotateRightLabel">writing</div>
                </section>
            </article>
            <section id="sparklesContainer">
                <img className="sparkle" src={sparkles}/>
            </section>
        </main>
    </>
}