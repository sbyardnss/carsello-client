import designImage from "../Images/signageSectionImage.JPEG"

export const Design = () => {


    return <>
        <main className="serviceContainer">
            <section className="serviceInfo">
                {/* <div className="serviceDescription xxLargeFont"> */}
                    <div className="descriptionLine xxLargeFont">I specialize in <span className="aquaHighlight">abstract</span> and <span className="violetHighlight">whimsical</span> designs.</div>
                {/* </div> */}
            </section>
            <section className="serviceInfo">
                {/* <div className="serviceDescription"> */}
                    <div className="descriptionBlock mediumFont">
                        I have made murals and/or flyers for Las Paletas, Xiao Bao , Soho House, Fido, Bongo East, Bongo Belmont and more.<br/><br/>
                        Pricing: 30-60/hr. All pricing is sliding scale but I am willing to work for select trade.<br/><br/>
                        {/* Reach out via email with questions. carselec20@gmail.com */}
                        Email me at <span className="aquaHighlight">carselec20@gmail.com</span> with questions.
                    </div>
                    <img className="servicePageImage" src={designImage} />
                {/* </div> */}
            </section>
        </main>
    </>
}