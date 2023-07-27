//OLD @PAYPAL/REACT-PAYPAL.JS 



// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"

// export const Paypal = ({cost}) => {
//     return (
//         <PayPalScriptProvider options={{ clientId: "test" }}>
//             <PayPalButtons style={{ layout: "horizontal", options: "enableFunding" }}
//                 createOrder={(data, actions, cost) => {
//                     return actions.order.create({
//                         purchase_units: [
//                             {
//                                 amount: {
//                                     // value: "1.99",
//                                     value: {cost},

//                                 },
//                             },
//                         ],
//                     });
//                 }}
//                 onApprove={(data, actions) => {
//                     return actions.order.capture().then((details) => {
//                         const name = details.payer.name.given_name;
//                         alert(`Transaction completed by ${name}`);
//                     });
//                 }} />
//         </PayPalScriptProvider>
//     )
// }

import React, { useEffect, useRef } from "react";

export const PayPal = ({ item }) => {
    const paypal = useRef()

    useEffect(
        () => {
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
                    console.log(order)
                },
                onError: (err) => {
                    console.log(err)
                }
            }).render(paypal.current)
        }, []
    )
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}