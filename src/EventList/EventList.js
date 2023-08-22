import { Link, useNavigate } from "react-router-dom"
import "../EventList/EventList.css"

export const EventList = ({ myEvents, setEdit }) => {
    const navigate = useNavigate()
    return <>
        <ul className="adminList">
            {
                myEvents?.map(e => {
                    // return (
                    //     <li
                    //         key={event.id}
                    //         className="eventListItem"
                    //         >
                    //         <div className="adminImageContainer">
                    //             <img className="adminImage" src={event.image} />
                    //         </div>
                    //         <div>{event.title}</div>
                    //         <div>{event.date_time}</div>
                    //         <button onClick={()=> setEdit(event.id)} >edit</button>
                    //     </li>
                    // )
                    return (
                        <div>

                            <li className="eventsListItem opaqueCard" key={e.id}>
                                <div className="eventInfo">
                                    <div className="mediumFont eventListItemHead">
                                        {e.title}
                                        <button onClick={() => setEdit(e.id)} >edit</button>
                                    </div>
                                    <div className="eventLogistics smallFont">
                                        {e.location}<br />
                                        {/* {printedDate}<br />
                                    {time} */}
                                        {e.date}<br />
                                        {e.time}
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

                        </div>

                    )
                })
            }
        </ul>
    </>
}