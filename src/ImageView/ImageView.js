import "../ImageView/ImageView.css"
export const ImageView = ({ selectedImageUrl, setImageToViewUrl, selectedEmbeddedImage }) => {
    if (selectedImageUrl) {
        return (
            <section id="imageViewContainer">
                <div id="imageViewDisplayDiv" className="opaqueCard">
                    <div className="exitImageBtnBlock">
                        <button className="exitImageViewBtn" onClick={() => setImageToViewUrl("")}>exit</button>
                    </div>
                    <img className="imageToView" src={selectedImageUrl} />
                </div>
            </section>
        )
    }
    if (selectedEmbeddedImage) {
        return (
            <section id="imageViewContainer">
                <div id="imageViewDisplayDiv" className="opaqueCard">
                    <div className="exitImageBtnBlock">
                        <button className="exitImageViewBtn" onClick={() => setImageToViewUrl("")}>exit</button>
                    </div>
                    <img className="imageToView" src={selectedEmbeddedImage} />
                </div>
            </section>
        )
    }
}