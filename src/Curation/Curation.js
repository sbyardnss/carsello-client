import { useEffect } from "react"
import "../Curation/Curation.css"
import curationImage from "../Images/curationSectionImage.JPEG"
export const Curation = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <>
        <main className="serviceContainer">
            <section className="serviceInfo">
                <div className="serviceDescription xxLargeFont">
                    <div className="descriptionLine">I strive to curate <span className="aquaHighlight">accessible</span> and <span className="violetHighlight">adaptable</span> art shows.</div>
                </div>
            </section>
            <section className="serviceInfo">
                <div className="descriptionBlock mediumFont">
                    I integrate accessibility into my practice by: teaching artists about hanging, framing, and art placement, assisting with install and uninstall, accommodating all scheduling needs, and negotiating a mutually beneficial agreement between the artists and venue.
                </div>
                <img className="servicePageImage" src={curationImage} />
            </section>
            {/* <section className="serviceInfo">
                <div className="descriptionBlock mediumFont">
                    Additionally, I seek artists with a variety of experience levels and love guiding folks through the process of their first show.  I have curated art shows for Fido, Bongo Belmont, Game Point Cafe, and Planned Parenthood.
                </div>
            </section> */}
            <section className="serviceInfo">
                <div className="descriptionBlock mediumFont">
                    Additionally, I seek artists with a variety of experience levels and love guiding folks through the process of their first show.  I have curated art shows for Fido, Bongo Belmont, Game Point Cafe, and Planned Parenthood.<br /><br />

                    The process break down:<br />
                    <ul>
                        <li>We set up a meeting  and discuss your goals and vision for your space and coordinate logistics.</li>
                        <li>I find artists compatible with your vision.</li>
                        <li>I coordinate and install the show.</li>
                        <li>I coordinate and uninstall the show :)</li>

                    </ul>
                    <br />
                    <br />

                    Pricing: 30-60 dollars / hr.<br />
                    All pricing is sliding scale.<br />
                    Email <span className="aquaHighlight">carselec20@gmail.com</span> with questions.
                </div>
            </section>
        </main>
    </>
}