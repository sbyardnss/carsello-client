import { useContext, useEffect, useState } from "react"
// import { ArtContext } from "../ArtProvider"
import { retrievePiece } from "../ServerManager"
import { useNavigate, useParams } from "react-router-dom"
import "../PieceInspection/PieceInspection.css"
import { PayPal } from "../Paypal/Paypal"
export const PieceInspection = () => {
    // const {artwork} = useContext(ArtContext)
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
            {purchase ?
                <PayPal item={selectedArt}/>
                :
                <article id="pieceDisplay">
                    <div id="pieceInspectionImageContainer">
                        <img className="pieceInspectionPiece" src={selectedArt.image} />
                    </div>
                    <div>{currencyFormat.format(selectedArt.price)}</div>
                    this is where your selected piece will appear
                    {/* <button id="exitPieceInspectionBtn"
                    onClick={() => navigate("/")}>exit</button> */}
                    <div>
                        {/* old paypal */}
                        {/* <Paypal cost={selectedArt.price}/>
                 */}
                    </div>
                    <button onClick={() => setPurchase(true)}>Purchase</button>
                </article>
            }
        </main>
    </>
}