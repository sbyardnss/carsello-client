import "../ImageView/ImageView.css"
export const ImageView = ({ selectedImageUrl, setImageToViewUrl }) => {
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