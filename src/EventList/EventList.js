import { useNavigate } from "react-router-dom"
import "../EventList/EventList.css"

export const EventList = ({ myEvents }) => {
    const navigate = useNavigate()
    return <>
        <ul id="eventList">
            {
                myEvents?.map(event => {
                    return (
                        <li
                            key={event.id}
                            className="eventListItem"
                            >
                            <div className="artDisplayImage">
                                <img className="artImage" src={event.image} />
                            </div>
                            <div>{event.title}</div>
                            <div>{event.date_time}</div>
                        </li>
                    )
                })
            }
        </ul>
    </>
}