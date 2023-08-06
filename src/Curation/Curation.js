import "../Curation/Curation.css"
import curationImage from "../Images/curationSectionImage.JPEG"
export const Curation = () => {

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
                <img className="servicePageImage" src={curationImage} />
                {/* <div className="descriptionBlock mediumFont">
                    Additionally, I seek artists with a variety of experience levels and love guiding folks through the process of their first show.  I have curated art shows for Fido, Bongo Belmont, Game Point Cafe, and Planned Parenthood.
                </div> */}
            </section>
            {/* <section className="serviceInfo">
                <img className="servicePageImage" src={curationImage} />
                <div className="descriptionBlock mediumFont">
                    Additionally, I seek artists with a variety of experience levels and love guiding folks through the process of their first show.  I have curated art shows for Fido, Bongo Belmont, Game Point Cafe, and Planned Parenthood.
                </div>
            </section> */}
        </main>
    </>
}