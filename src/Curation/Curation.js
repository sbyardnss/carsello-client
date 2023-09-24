import { useEffect } from "react"
import "../Curation/Curation.css"
import curationImage from "../Images/curationSectionImage.JPEG"
// import previousCurations from "../Images/curationExamples"
import bobTurano from "../Images/curationExamples/bobTurano.jpg"
import ajIi from "../Images/curationExamples/aJIi.jpg"
import aPlaceForMyHead from "../Images/curationExamples/aPlaceForMyHead.jpg"
import aprilRugs from "../Images/curationExamples/aprilRugs.jpg"
import ashleyTreece from "../Images/curationExamples/ashleyTreece.jpg"
import elizabethWiseman from "../Images/curationExamples/elizabethWiseman.jpg"
import grantWLowe from "../Images/curationExamples/grantWLowe.jpg"
import jesseShofner1 from "../Images/curationExamples/jesseShofner1.jpg"
import jesseShofner2 from "../Images/curationExamples/jesseShofner2.JPG"
import meggoJojo1 from "../Images/curationExamples/meggoJojo1.jpeg"
import meggoJojo2 from "../Images/curationExamples/meggoJojo2.JPEG"
import screamingCryptidMan1 from "../Images/curationExamples/screamingCryptidMan1.jpg"
import screamingCryptidMan2 from "../Images/curationExamples/screamingCryptidMan2.jpg"
import { ImageView } from "../ImageView/ImageView"
import { useState } from "react"

export const Curation = () => {
    const [imageToViewUrl, setImageToViewUrl] = useState("")
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    console.log(bobTurano)
    return <>
        <main className="serviceContainer">
            {
                imageToViewUrl ?
                    <ImageView
                        selectedEmbeddedImage={imageToViewUrl}
                        setImageToViewUrl={setImageToViewUrl}
                    />
                    : ""
            }
            <section className="serviceInfo">
                <div className="serviceDescription xxLargeFont">
                    <div className="descriptionLine">I strive to curate <span className="aquaHighlight">accessible</span> and <span className="violetHighlight">adaptable</span> art shows.</div>
                </div>
            </section>
            <section className="serviceInfo">
                <div className="descriptionBlock mediumFont">
                    I integrate accessibility into my practice by: teaching artists about hanging, framing, and art placement, assisting with install and uninstall, accommodating all scheduling needs, and negotiating a mutually beneficial agreement between the artists and venue.
                </div>
                <div id="primaryCurationImageContainer">
                    <img className="curationDisplayImage" src={curationImage} />
                    <div className="smallFontWeight">@thephotojojo @eebrownleatherworks</div>
                </div>
            </section>
            <section className="serviceInfo">
                <div className="descriptionBlock mediumFont">
                    Additionally, I seek artists with a variety of experience levels and love guiding folks through the process of their first show.  I have curated art shows for Fido, Bongo Belmont, Game Point Cafe, and Planned Parenthood.<br /><br />

                    The process break down:<br />
                    <ul className="opaqueCard">
                        <li className="pushIn">We set up a meeting  and discuss your goals and vision for your space and coordinate logistics.</li>
                        <li className="pushIn">I find artists compatible with your vision.</li>
                        <li className="pushIn">I coordinate and install the show.</li>
                        <li className="pushIn">I coordinate and uninstall the show :)</li>

                    </ul>
                    <br />
                    <br />

                    Pricing: 30-60 dollars / hr.<br />
                    All pricing is sliding scale.<br />
                    Email <span className="aquaHighlight">carselec20@gmail.com</span> with questions.
                </div>
            </section>
            <section id="previousCurationSection">
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(bobTurano)}>
                    <img className="curationDisplayImage" src={bobTurano} />
                    <div className="smallFontWeight">Bob Turano</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(ajIi)}>
                    <img className="curationDisplayImage" src={ajIi} />
                    <div className="smallFontWeight">@a.j.ii</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(aPlaceForMyHead)}>
                    <img className="curationDisplayImage" src={aPlaceForMyHead} />
                    <div className="smallFontWeight">@aplaceformythread</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(aprilRugs)}>
                    <img className="curationDisplayImage" src={aprilRugs} />
                    <div className="smallFontWeight">@aprilrugs</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(ashleyTreece)}>
                    <img className="curationDisplayImage" src={ashleyTreece} />
                    <div className="smallFontWeight">@ashleytreece</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(elizabethWiseman)}>
                    <img className="curationDisplayImage" src={elizabethWiseman} />
                    <div className="smallFontWeight">Elizabeth Wiseman</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(grantWLowe)}>
                    <img className="curationDisplayImage" src={grantWLowe} />
                    <div className="smallFontWeight">@grantwlowe</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(jesseShofner1)}>
                    <img className="curationDisplayImage" src={jesseShofner1} />
                    <div className="smallFontWeight">@jesseshofner</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(jesseShofner2)}>
                    <img className="curationDisplayImage" src={jesseShofner2} />
                    <div className="smallFontWeight">@jesseshofner</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(meggoJojo1)}>
                    <img className="curationDisplayImage" src={meggoJojo1} />
                    <div className="smallFontWeight">@meggojojo</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(meggoJojo2)}>
                    <img className="curationDisplayImage" src={meggoJojo2} />
                    <div className="smallFontWeight">@meggojojo</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(screamingCryptidMan1)}>
                    <img className="curationDisplayImage" src={screamingCryptidMan1} />
                    <div className="smallFontWeight">@screamingcryptidman</div>
                </div>
                <div className="curationImageAndCredit" onClick={() => setImageToViewUrl(screamingCryptidMan2)}>
                    <img className="curationDisplayImage" src={screamingCryptidMan2} />
                    <div className="smallFontWeight">@screamingcryptidman</div>
                </div>
            </section>
        </main>
    </>
}