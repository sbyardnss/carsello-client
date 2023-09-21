import "../ImageView/ImageView.css"
export const ImageView = ({selectedImageUrl, setImageToViewUrl}) => {
    return (
        <div id="imageViewContainer" className="opaqueCard">
            <div className="exitImageBtnBlock">
                <button className="exitImageViewBtn" onClick={() => setImageToViewUrl("")}>exit</button>
            </div>
            <img className="imageToView" src={selectedImageUrl} />
        </div>
    )
}