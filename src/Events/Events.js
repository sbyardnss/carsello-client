import { useEffect, useState } from "react"
import "../Events/Events.css"
import { getEvents } from "../ServerManager"

export const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(
        () => {
            getEvents()
                .then(data => setEvents(data))
        }, []
    )
    return <>
        <main id="eventsContainer">
            <div className="customFontHead">Upcoming Events</div>
            <section id="eventsListContainer">
                <ul id="eventsList">
                    {
                        events.map(e => {
                            const date = new Date (e.date_time)
                            const printedDate = date.toDateString()
                            const time = date.toLocaleTimeString('en-us', {hour: 'numeric', minute: 'numeric'})
                            return (
                                <li className="eventsListItem opaqueCard" key={e.id}>
                                    <div className="eventInfo">
                                        <div>{e.title}</div>
                                        <div>{e.location}</div>
                                        <div>{printedDate}</div>
                                        <div>{time}</div>
                                        <div>{e.details}</div>
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