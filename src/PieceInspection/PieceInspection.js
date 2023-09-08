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
    const [namePrice, setNamePrice] = useState(false)
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
    useEffect(
        () => {
            console.log(selectedPrice)
        }, [selectedPrice]
    )
    const priceDifCheck = selectedPrice - selectedArt.price < 0 ? (selectedPrice - selectedArt.price) * -1 : selectedPrice - selectedArt.price

    return <>
        <main id="pieceInspectionContainer">
            <button className="purchaseToggleOff artBack" onClick={() => {
                setSelectedArt({})
                navigate(-1)
            }}>back to art</button>
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
                    {purchase && selectedArt.quantity > 0 ?
                        <div className="purchaseBox">
                            {/* {namePrice === true ?  */}
                            <PayPal
                                item={selectedArt}
                                resetArt={resetPiece}
                                purchaseSet={setPurchase}
                                price={selectedPrice}
                                setPrice={setSelectedPrice}
                            />
                            {/* :
                                <PayPal
                                    item={selectedArt}
                                    resetArt={resetPiece}
                                    purchaseSet={setPurchase}
                                />
                            } */}
                            <button className="purchaseToggleOff purchaseCancel" onClick={() => {
                                setPurchase(false)
                                setNamePrice(false)
                                setSelectedPrice(selectedArt.price)
                            }}>cancel</button>
                        </div>
                        : selectedArt.quantity > 0 ?
                            <div className="purchaseBox">
                                <button className="purchaseToggleOn" onClick={() => setPurchase(true)}>Purchase at Price</button>
                                {!namePrice ?
                                    <div className="purchaseToggleOn2" onClick={() => setNamePrice(true)}>
                                        Name Price
                                    </div>
                                    :
                                    <div id="namePriceBox">
                                        <div className="smallFontWeight">Price must be within ${selectedArt.range} of asking</div>
                                        {/* <input className="namePriceInput" type="number" placeholder='name price within range' onChange={(e) => setOwnPrice(parseInt(e.target.value))} /> */}
                                        <input className="namePriceInput" type="number" placeholder='name price within range' onChange={(e) => setSelectedPrice(parseInt(e.target.value))} />
                                        <div>
                                            <button className="purchaseToggleOn" onClick={() => {
                                                // const priceDifCheck = selectedPrice - selectedArt.price < 0 ? (selectedPrice - selectedArt.price) * -1 : selectedPrice - selectedArt.price
                                                if (priceDifCheck <= selectedArt.range) {
                                                    setPurchase(true)
                                                }
                                                else {
                                                    window.alert(`price must be within $${selectedArt.range} of asking price`)
                                                }
                                            }}>purchase</button>
                                            <button className="purchaseToggleOff purchaseCancel" onClick={() => {
                                                setNamePrice(false)
                                                setSelectedPrice(selectedArt.price)
                                            }}>cancel</button>
                                        </div>
                                    </div>
                                }
                            </div>
                            : ""
                    }
                </div>
            </article>
            <section id="supportImageDisplay">
                {
                    selectedArt.support_images?.map(si => {
                        return <img key={si} className="supportImage" src={si} />
                    })
                }
            </section>
        </main>
    </>
}