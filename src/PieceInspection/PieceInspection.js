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
        },[]
    )

    return <>
        <main id="pieceInspectionContainer">
            <div id="pieceInspectionImageContainer">
                <img className="pieceInspectionPiece" src={selectedArt.image} />
            </div>
            this is where your selected piece will appear
            <button id="exitPieceInspectionBtn"
                onClick={() => navigate("/")}>exit</button>
        </main>
    </>
}