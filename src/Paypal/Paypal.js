import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"

export const Paypal = () => {
    return (
        <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons style={{ layout: "horizontal", options: "enableFunding" }} />
        </PayPalScriptProvider>
    )
}