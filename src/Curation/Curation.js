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
                <div className="serviceDescription">
                    <div className="descriptionBlock mediumFont">
                        I integrate accessibility into my practice by: teaching artists about hanging, framing, and art placement, assisting with install and uninstall, accommodating all scheduling needs, and negotiating a mutually beneficial agreement between the artists and venue.
                    </div>
                </div>
                <img className="servicePageImage" src={curationImage} />
            </section>
        </main>
    </>
}