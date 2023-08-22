import { useNavigate } from "react-router-dom"
import "../EventList/EventList.css"

export const EventList = ({ myEvents, setEdit }) => {
    const navigate = useNavigate()
    return <>
        <ul className="adminList">
            {
                myEvents?.map(event => {
                    return (
                        <li
                            key={event.id}
                            className="eventListItem"
                            >
                            <div className="adminImageContainer">
                                <img className="adminImage" src={event.image} />
                            </div>
                            <div>{event.title}</div>
                            <div>{event.date_time}</div>
                            <button onClick={()=> setEdit(event.id)} >edit</button>
                        </li>
                    )
                })
            }
        </ul>
    </>
}