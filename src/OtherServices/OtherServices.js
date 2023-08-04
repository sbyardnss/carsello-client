import "../OtherServices/OtherServices.css"
import curationImage from "../Images/curationSectionImage.JPEG"
export const OtherServices = () => {

    return <>
        <main id="otherServicesContainer">
            <section className="otherServicesHeader">
                {/* <img className="otherServicesImage" src={curationImage} /> */}
                <p className="serviceDescription xxLargeFont">
                    <div className="descriptionLine">I strive to curate accessible and adaptable art shows.</div>
                    {/* <div className="descriptionLine">I integrate accessibility into my practice by: teaching artists about hanging, framing, and art placement, assisting with install and uninstall, accommodating all scheduling needs, and negotiating a mutually beneficial agreement between the artists and venue.</div>
                    <div className="descriptionLine">Additionally, I seek artists with a variety of experience levels and love guiding folks through the process of their first show.</div>
                    <div className="descriptionLine">I have curated art shows for Fido, Bongo Belmont, Game Point Cafe, and Planned Parenthood.</div> */}
                    {/* <div className="descriptionLine">I specialize in abstract and whimsical designs.</div> */}
                    {/* <div className="descriptionLine">I have made murals and/or flyers for Las Paletas, Xiao Bao,</div>
                    <div className="descriptionLine">Soho House, Fido, Bongo East, Bongo Belmont and more.</div>
                    <div className="descriptionLine">Pricing: 30-60/hr.</div>
                    <div className="descriptionLine">All pricing is sliding scale, but willing to work for select trade.</div>
                    <div className="descriptionLine">Reach out via email with questions.</div> */}
                </p>

            </section>
            <section className="otherServicesHeader">
                <p className="serviceDescription">
                    <div className="descriptionLine mediumFont">I integrate accessibility into my practice by: teaching artists about hanging, framing, and art placement, assisting with install and uninstall, accommodating all scheduling needs, and negotiating a mutually beneficial agreement between the artists and venue.</div>
                </p>
                <img className="otherServicesImage" src={curationImage} />

            </section>
        </main>
    </>
}