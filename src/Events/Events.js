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
            <section id="eventsListContainer">
                <ul id="eventsList">
                    {
                        events.map(e => {
                            return (
                                <li className="eventsListItem" key={e.id}>
                                    <div className="eventInfo">
                                        <div>{e.title}</div>
                                        <div>{e.location}</div>
                                        <div>{e.date}</div>
                                    </div>
                                    <img className="eventImage" src={e.imageUrl} />
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </main>
    </>
}