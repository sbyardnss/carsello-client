import { useEffect, useState } from "react"
import "../Events/Events.css"
import { getEvents } from "../ServerManager"
import { Link, useLocation } from "react-router-dom"

export const Events = ({ myEvents, setEdit }) => {
    const [events, setEvents] = useState([])
    const url = useLocation()
    useEffect(
        () => {
            if (!myEvents) {
                getEvents()
                    .then(data => setEvents(data))
            }
            else {
                setEvents(myEvents)
            }
        }, [myEvents]
    )
    return <>
        <main id="serviceContainer">
            {url.pathname === "/events" ?
                <div className="eventsHeader">
                    <div className="customFontHead">Upcoming Events</div>
                </div>
                : ""}
            <section id="eventsListContainer">
                <ul id="eventsList">
                    {
                        events.map(e => {
                            return (
                                <li className="eventsListItem opaqueCard" key={e.id}>
                                    <div className="eventInfo">
                                        <div className="mediumFont eventListItemHead">
                                            {e.title}
                                            {url.pathname === "/admin" ?
                                                <button onClick={() => setEdit(e.id)} >edit</button>
                                                : ""}
                                        </div>
                                        <div className="eventLogistics smallFont">
                                            {e.location}<br />
                                            {e.date}<br />
                                            {e.time}<br />
                                            Price: {!e.price ? "Free!" : `$${e.price}`}
                                        </div>
                                        {e.link ?
                                            <div className="eventLink">
                                                <Link className="aquaHighlight" to={e.link}>See Event Page</Link>
                                            </div>
                                            : ""}
                                        <div className="eventDescription">{e.details}</div>
                                    </div>
                                    <img className="eventImage" src={e.image} />
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </main>
    </>
}