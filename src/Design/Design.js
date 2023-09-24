import { useEffect } from "react"
import designImage from "../Images/signageSectionImage.JPEG"
import bedroom1 from "../Images/designExamples/bedroom1.jpg"
import bedroom2 from "../Images/designExamples/bedroom2.jpg"
import fallDrinks from "../Images/designExamples/fallDrinks.jpg"
import fallDrinks2 from "../Images/designExamples/fallDrinks2.jpg"
import lasPaletas from "../Images/designExamples/lasPaletas.jpeg"
import shed from "../Images/designExamples/shed.JPG"
import signatureDrinks from "../Images/designExamples/signatureDrinks.JPG"
import strawberryBizarre from "../Images/designExamples/strawberryBizarre.jpeg"
import summerDrinks from "../Images/designExamples/summerDrinks.jpeg"
import wehoArtCrawl from "../Images/designExamples/lasPaletas.jpeg"
import "../Design/Design.css"

export const Design = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
                    I have made murals and/or flyers for Las Paletas, Xiao Bao , Soho House, Fido, Bongo East, Bongo Belmont and more.<br /><br />
                    Pricing: 30-60/hr. All pricing is sliding scale but I am willing to work for select trade.<br /><br />
                    {/* Reach out via email with questions. carselec20@gmail.com */}
                    Email me at <span className="aquaHighlight">carselec20@gmail.com</span> with questions.
                </div>
                <img className="servicePageImage" src={designImage} />
                {/* </div> */}
            </section>
            <section id="previousDesignSection">
                <img className="designDisplayImage" src={bedroom1} />
                <img className="designDisplayImage" src={bedroom2} />
                <img className="designDisplayImage" src={fallDrinks} />
                <img className="designDisplayImage" src={fallDrinks2} />
                <img className="designDisplayImage" src={lasPaletas} />
                <img className="designDisplayImage" src={shed} />
                <img className="designDisplayImage" src={signatureDrinks} />
                <img className="designDisplayImage" src={strawberryBizarre} />
                <img className="designDisplayImage" src={summerDrinks} />
                <img className="designDisplayImage" src={wehoArtCrawl} />
            </section>
        </main>
    </>
}