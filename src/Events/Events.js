import { useEffect, useState } from "react"
import "../Events/Events.css"
import { getEvents } from "../ServerManager"
import { Link } from "react-router-dom"

export const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(
        () => {
            getEvents()
                .then(data => setEvents(data))
        }, []
    )
    return <>
        <main id="serviceContainer">
            <div className="eventsHeader">
                <div className="customFontHead">Upcoming Events</div>
            </div>
            <section id="eventsListContainer">
                <ul id="eventsList">
                    {
                        events.map(e => {
                            const date = new Date(e.date_time)
                            const printedDate = date.toDateString()
                            const time = date.toLocaleTimeString('en-us', { hour: 'numeric', minute: 'numeric' })
                            return (
                                <li className="eventsListItem opaqueCard" key={e.id}>
                                    <div className="eventInfo">
                                        <div className="mediumFont">{e.title}</div>
                                        <div className="eventLogistics smallFont">
                                            {e.location}<br />
                                            {printedDate}<br />
                                            {time}
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