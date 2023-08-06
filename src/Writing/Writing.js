import { useEffect } from "react"
import writingImage from "../Images/writingSectionImage.JPG"

export const Writing = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <>
        <main className="serviceContainer">
            <section className="serviceInfo">
                {/* <div className="serviceDescription xxLargeFont"> */}
                <div className="descriptionLine xxLargeFont">My academic, professional, and personal experiences have helped me cultivate <span className="aquaHighlight">multiple writing styles</span> applicable to a <span className="violetHighlight">variety of goals</span>.</div>
                {/* </div> */}
            </section>
            <section className="serviceInfo">
                <div className="descriptionBlock mediumFont">
                    <div className="descriptionBlock mediumFont">
                        Through a bachelor’s degree at Vanderbilt, I honed concise and clear writing skills and gained insight on the type of writing academic institutions desire.<br /><br />
                        While this writing style is helpful for applications, grant writing, and more, it is often undesirable outside of the world of academia.
                    </div>
                </div>
                <img className="servicePageImage" src={writingImage} />
            </section>
            <section className="serviceInfo">
                <div className="descriptionBlock mediumFont">
                    As an art curator, I developed a more community oriented writing style; I have helped countless folks write bios and artist statements to portray more personal messages directed towards community connection.<br /><br />
                    
                    Process (varies depending on your goal):<br/>
                    -We set a meeting in which you will tell me about yourself, your art, your process, and goals.<br/>
                    -I research the program or show you are applying to.<br/>
                    -I help create an outline, a strong thesis, and assist in structuring your writing to be clear and true to your process/vision.<br/>
                    -I send edits based off of this draft.<br/><br/>
                    Pricing: $25-50 /hour. All pricing is sliding scale.<br/>
                    Email me with questions <span className="aquaHighlight">carselec20@gmail.com</span>
                </div>
            </section>
        </main>
    </>

}