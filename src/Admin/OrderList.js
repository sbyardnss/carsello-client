import { useEffect, useState } from "react"
import { markShipped, markUnshipped } from "../ServerManager"

export const OrderList = ({ orders, artwork, filterByShipped }) => {
    const [sortedOrders, setSortedOrders] = useState([])
    //name
    //ordered item
    //date
    //amount
    useEffect(
        () => {
            if (filterByShipped) {
                const filtered = sortedOrders.filter(so => so.shipped === false)
                setSortedOrders(filtered)
            }
            else {
                const sortByDate = orders.sort((a, b) => {
                    return new Date(a.created) - new Date(b.created)
                })
                const sortByShipped = sortByDate.sort((a, b) => a.shipped - b.shipped)
                setSortedOrders(sortByShipped)
            }
        }, [filterByShipped]
    )
    
    return (
        <ul id="orderListContainer" className="adminList">
            {
                sortedOrders.map(o => {
                    const date = new Date(o.created).toLocaleTimeString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
                    return (
                        <div key={o.id} className="orderListItem">
                            <div className="orderListInfo">
                                <div className="violetHighlight"><span className="mediumFont">Customer Name:</span><br/> {o.customer_name}</div>
                                <div className="violetHighlight"><span className="mediumFont">Created:</span><br/>{date}</div>
                                <div className="violetHighlight"><span className="mediumFont">Paypal order Id:</span><br/>{o.paypal_order_id}</div>
                            </div>
                            {o.shipped ? <button className="adminBtnReject" onClick={() => markUnshipped(o.id)}>mark unshipped</button>
                            : <button className="adminButton" onClick={() => markShipped(o.id)}>mark shipped</button>}
                        </div>
                    )
                })
            }
        </ul>
    )
}