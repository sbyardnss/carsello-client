import "../OtherServices/OtherServices.css"
import curationImage from "../Images/curationSectionImage.JPEG"
export const OtherServices = () => {

    return <>
        <main id="otherServicesContainer">
            <section className="otherServicesHeader">
                <img className="otherServicesImage" src={curationImage} />
                <p className="serviceDescription">
                    <div className="descriptionLine">I specialize in abstract and whimsical designs.</div>
                    <div className="descriptionLine">I have made murals and/or flyers for Las Paletas, Xiao Bao,</div>
                    <div className="descriptionLine">Soho House, Fido, Bongo East, Bongo Belmont and more.</div>
                    <div className="descriptionLine">Pricing: 30-60/hr.</div>
                    <div className="descriptionLine">All pricing is sliding scale, but willing to work for select trade.</div>
                    <div className="descriptionLine">Reach out via email with questions.</div>
                </p>
            </section>
        </main>
    </>
}