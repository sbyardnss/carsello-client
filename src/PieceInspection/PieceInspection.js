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
    return <>
        <main id="pieceInspectionContainer">
            <article id="paymentAndDisplay" className="opaqueCard">
                <div id="pieceInspectionImageContainer">
                    <img className="pieceInspectionPiece" src={selectedArt.primary_image} />
                </div>
                <div id="pieceData">
                    <div>{selectedArt.title}</div>
                    <div>{currencyFormat.format(selectedArt.price)}</div>
                    {purchase && selectedArt.quantity > 0 ?
                        <div className="purchaseBox">
                            <PayPal
                                item={selectedArt}
                                resetArt={resetPiece}
                                purchaseSet={setPurchase}
                            />
                            <button className="purchaseToggle" onClick={() => setPurchase(false)}>cancel</button>
                        </div>
                        : selectedArt.quantity > 0 ?
                            <div className="purchaseBox">
                                <button className="purchaseToggle" onClick={() => setPurchase(true)}>Purchase</button>
                            </div>
                            : ""
                    }
                </div>
            </article>
            <section id="supportImageDisplay">
                    {
                        selectedArt.support_images?.map(si => {
                            return <img key={si} className="supportImage" src={si}/>
                        })
                    }
            </section>
        </main>
    </>
}