import { useEffect, useState } from "react"
import { PayPal } from "../Paypal/Paypal"

export const PaymentSelection = ({ item, resetArt, price, setPrice, priceDifCheck }) => {
    const [namePrice, setNamePrice] = useState(false)
    const [purchase, setPurchase] = useState(false)
    useEffect(
        () => {
            if (purchase) {

                console.log('working')
            }
        },[purchase]
    )

    //if purchase && quanity, show paypal
    if (purchase && item.quantity > 0) {
        return (
            <div className="purchaseBox">
                <PayPal
                    item={item}
                    resetArt={resetArt}
                    purchaseSet={setPurchase}
                    price={price}
                    setPrice={setPrice}
                />
                <button className="purchaseToggleOff purchaseCancel" onClick={() => {
                    setPurchase(false)
                    setNamePrice(false)
                    setPrice(item.price)
                }}>cancel</button>
            </div>
        )
    }
    
    //else if quantity and namePrice, show name price info
    else if (namePrice && item.quantity > 0) {
        return (
            <div className="purchaseBox">
                <div id="namePriceBox">
                    <div className="smallFontWeight">Price must be within ${item.range} of asking</div>
                    <input className="namePriceInput" type="number" placeholder='name price within range' onChange={(e) => setPrice(parseInt(e.target.value))} />
                    <div id="namePriceBtnDiv">
                        <button className="purchaseToggleOn" onClick={() => {
                            if (priceDifCheck <= item.range) {
                                setPurchase(true)
                            }
                            else {
                                window.alert(`price must be within $${item.range} of asking price`)
                            }
                        }}>purchase</button>
                        <button className="purchaseToggleOff purchaseCancel" onClick={() => {
                            setNamePrice(false)
                            setPrice(item.price)
                        }}>cancel</button>
                    </div>
                </div>
            </div>
        )
    }
    //else show normal buttons
    else if (item.quantity > 0) {
        return (
            <div className="purchaseBox">
                <button className="purchaseToggleOn" onClick={() => setPurchase(true)}>Purchase at Price</button>
                <div className="purchaseToggleOn2" onClick={() => setNamePrice(true)}>
                    Name Price
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2>out of stock</h2>
            </div>
        )
    }
}