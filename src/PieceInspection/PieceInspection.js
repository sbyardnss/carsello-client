import { useEffect, useState } from "react"
import { retrievePiece } from "../ServerManager"
import { useNavigate, useParams } from "react-router-dom"
import "../PieceInspection/PieceInspection.css"
import { PayPal } from "../Paypal/Paypal"
export const PieceInspection = () => {
    const navigate = useNavigate()
    const { artId } = useParams()
    const [selectedArt, setSelectedArt] = useState({})
    const [purchase, setPurchase] = useState(false)
    useEffect(
        () => {
            retrievePiece(artId)
                .then(data => setSelectedArt(data))
        }, []
    )
    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    return <>
        <main id="pieceInspectionContainer">
            <article id="pieceDisplay">
                <div id="pieceInspectionImageContainer">
                    <img className="pieceInspectionPiece" src={selectedArt.image} />
                </div>
            </article>
            {!selectedArt.sold ?
                <div className="purchaseBox">
                    {purchase ?
                        <div className="purchaseBox">
                            <div>{currencyFormat.format(selectedArt.price)}</div>
                            <div>{selectedArt.title}</div>
                            <PayPal item={selectedArt} setArt={setSelectedArt} />
                            <button className="purchaseToggle" onClick={() => setPurchase(false)}>cancel</button>
                        </div>
                        :
                        <div className="purchaseBox">
                            <div>{selectedArt.title}</div>
                            <div>{currencyFormat.format(selectedArt.price)}</div>
                            <button className="purchaseToggle" onClick={() => setPurchase(true)}>Purchase</button>
                        </div>
                    }
                </div>
                : ""}
        </main>
    </>
}