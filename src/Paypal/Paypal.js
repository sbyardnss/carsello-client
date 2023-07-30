import React, { useEffect, useRef, useState } from "react";
import { retrievePiece, sendNewOrder, setSold } from "../ServerManager";

export const PayPal = ({ item, setArt }) => {
    const [paypalReturnOrder, setPaypalReturnOrder] = useState({})
    const [newOrder, updateNewOrder] = useState({
        ordered_item: 0,
        paypal_order_id: "",
        created: "",
        customer_paypal_id: "",
        customer_email: "",
        customer_name: "",
        order_amount: 0,
        payment_id: "",
        payment_status: "",
        payment_protection: "",
        reference_id: "",
        shipping_street_address: "",
        shipping_city: "",
        shipping_state: "",
        shipping_country_code: "",
        shipping_zipcode: "",
        order_status: ""
    })
    const paypal = useRef()
    //grabbin response from successful paypal purchase
    useEffect(
        () => {
            if (paypalReturnOrder.status === 'COMPLETED') {
                const copy = { ...newOrder }
                copy.ordered_item = item.id
                copy.paypal_order_id = paypalReturnOrder.id
                copy.created = paypalReturnOrder.create_time
                copy.customer_paypal_id = paypalReturnOrder.payer.payer_id
                copy.customer_email = paypalReturnOrder.payer.email_address
                copy.customer_name = paypalReturnOrder.purchase_units[0].shipping.name.full_name
                copy.order_amount = parseFloat(paypalReturnOrder.purchase_units[0].amount.value)
                copy.payment_id = paypalReturnOrder.purchase_units[0].payments.captures[0].id
                copy.payment_status = paypalReturnOrder.purchase_units[0].payments.captures[0].status
                copy.payment_protection = paypalReturnOrder.purchase_units[0].payments.captures[0].seller_protection.status
                copy.reference_id = paypalReturnOrder.purchase_units[0].reference_id
                copy.shipping_street_address = paypalReturnOrder.purchase_units[0].shipping.address.address_line_1
                copy.shipping_city = paypalReturnOrder.purchase_units[0].shipping.address.admin_area_2
                copy.shipping_state = paypalReturnOrder.purchase_units[0].shipping.address.admin_area_1
                copy.shipping_country_code = paypalReturnOrder.purchase_units[0].shipping.address.country_code
                copy.shipping_zipcode = paypalReturnOrder.purchase_units[0].shipping.address.postal_code
                copy.order_status = paypalReturnOrder.status
                updateNewOrder(copy)
                sendNewOrder(copy)
                setSold(item.id)
                //this version doesn't actually reflect the data from the server but still works
                //as soon as page is refreshed it will reflect database
                const artCopy = { ...item }
                artCopy.sold = true
                setArt(artCopy)
                // .then((data) => {
                //     if (data.status === 204){
                //         retrievePiece(item.id)
                //             .then(data => setArt(data))
                //     }
                // })
            }
        }, [paypalReturnOrder]
    )
    useEffect(
        () => {
            if (item.id && item.sold === false) {
                window.paypal.Buttons({
                    createOrder: (data, actions, error) => {
                        return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                                {
                                    description: item.title,
                                    amount: {
                                        currency_code: "USD",
                                        value: item.price
                                    }
                                }
                            ]
                        })
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture()
                        setPaypalReturnOrder(order)
                        console.log(order)
                    },
                    onError: (err) => {
                        console.log(err)
                    }
                }).render(paypal.current)
            }
        }, []
    )
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}