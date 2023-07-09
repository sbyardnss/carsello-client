import { useContext, useEffect, useState } from "react"
// import { ArtContext } from "../ArtProvider"
import { retrievePiece } from "../ServerManager"
import { useNavigate, useParams } from "react-router-dom"
import "../PieceInspection/PieceInspection.css"
export const PieceInspection = () => {
    // const {artwork} = useContext(ArtContext)
    const navigate = useNavigate()
    const { artId } = useParams()
    const [selectedArt, setSelectedArt] = useState({})
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
                <div>{currencyFormat.format(selectedArt.price)}</div>
                this is where your selected piece will appear
                {/* <button id="exitPieceInspectionBtn"
                    onClick={() => navigate("/")}>exit</button> */}
            </article>
        </main>
    </>
}