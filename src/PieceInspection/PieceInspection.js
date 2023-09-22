import { useEffect, useState } from "react"
import { retrievePiece } from "../ServerManager"
import { useNavigate, useParams } from "react-router-dom"
import "../PieceInspection/PieceInspection.css"
import { PaymentSelection } from "./PaymentSelection"
import { ImageView } from "../ImageView/ImageView"
// import { PayPal } from "../Paypal/Paypal"

export const PieceInspection = () => {
    const navigate = useNavigate()
    const { artId } = useParams()
    const [selectedArt, setSelectedArt] = useState({})
    // const [purchase, setPurchase] = useState(false)
    // const [namePrice, setNamePrice] = useState(false)
    const [imageToViewUrl, setImageToViewUrl] = useState("")
    // const [ownPrice, setOwnPrice] = useState(0)
    const [selectedPrice, setSelectedPrice] = useState(0)
    useEffect(
        () => {
            retrievePiece(artId)
                .then(data => setSelectedArt(data))
        }, []
    )
    useEffect(
        () => {
            setSelectedPrice(selectedArt.price)
        }, [selectedArt]
    )
    const resetPiece = (artId) => {
        retrievePiece(artId)
            .then(data => setSelectedArt(data))
    }

    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const priceDifCheck = selectedPrice - selectedArt.price < 0 ? (selectedPrice - selectedArt.price) * -1 : selectedPrice - selectedArt.price

    return <>
        <main id="pieceInspectionContainer">
            {
                imageToViewUrl ?
                    <ImageView
                        selectedImageUrl={imageToViewUrl}
                        setImageToViewUrl={setImageToViewUrl}
                    />
                    : ""
            }
            <div id="backToArtBtnDiv">
                <button className="purchaseToggleOff artBack" onClick={() => {
                    setSelectedArt({})
                    navigate(-1)
                }}>back to art</button>
            </div>
            <article id="paymentAndDisplay" className="opaqueCard">
                <div id="pieceInspectionImageContainer">
                    <img className="pieceInspectionPiece" src={selectedArt.primary_image} />
                </div>
                <div id="pieceDataAndPurchase">
                    <div id="pieceInfo">
                        <div className="infoFlex">
                            <div className="mediumFontWeight">{selectedArt.title}</div>
                            <div className="mediumFontWeight">{currencyFormat.format(selectedArt.price)}</div>
                        </div>
                        <div className="smallFontWeight">Dimensions: {selectedArt.dimensions}</div>
                        <div className="smallFontWeight">Year: {selectedArt.year}</div>
                    </div>
                    <PaymentSelection
                        item={selectedArt}
                        resetArt={resetPiece}
                        price={selectedPrice}
                        setPrice={setSelectedPrice}
                        priceDifCheck={priceDifCheck}
                    />
                </div>
            </article>
            <section id="supportImageDisplay">
                {
                    selectedArt.support_images?.map(si => {
                        console.log(si)
                        return <img key={si} className="supportImage" onClick={() => setImageToViewUrl(si)} src={si} />
                    })
                }
            </section>
        </main>
    </>
}